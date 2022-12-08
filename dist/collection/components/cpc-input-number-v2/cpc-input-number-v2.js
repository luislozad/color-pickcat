import { Host, h } from '@stencil/core';
import UpIcon from '../../assets/up+icon.svg';
import DownIcon from '../../assets/down+icon.svg';
export class CpcInputNumberV2 {
  constructor() {
    this.numberOfTimesPressed = 0;
    this.incPressed = false;
    this.decPressed = false;
    this.initState = false;
    this.value = 0;
    this.label = undefined;
    this.toggle = false;
  }
  render() {
    const displayControls = this.toggle ? 'flex' : 'hidden';
    return (h(Host, null, h("cpc-input-v1", { class: `w-px h-8 grow cursor-text text-[#333333] text-sm`, onInputChange: ({ detail }) => this.onInputChangeEvent(detail), onInputCleanSelection: ({ detail }) => this.onInputCleanSelection(detail), value: this.value }), this.label && !this.toggle ? (h("div", { class: 'text-[10px] uppercase pr-2' }, this.label)) : null, h("div", { class: `w-5 flex flex-col self-stretch ${displayControls}` }, h("div", { onMouseDown: () => this.incMouseDown(), onMouseUp: () => this.incMouseUp(), class: 'flex cursor-pointer h-px grow justify-center items-center', innerHTML: UpIcon }), h("div", { onMouseDown: () => this.decMouseDown(), onMouseUp: () => this.decMouseUp(), class: 'flex cursor-pointer h-px grow justify-center items-center', innerHTML: DownIcon }))));
  }
  onInputChangeEvent(detail) {
    this.inputChangeEvent.emit(detail);
  }
  onInputCleanSelection(detail) {
    this.cleanSelectionEvent.emit({ cleanSelection: detail.cleanSelection });
  }
  incMouseDown() {
    this.incEvent.emit({ value: +1 });
    this.incPressed = true;
  }
  incMouseUp() {
    this.incPressed = false;
  }
  decMouseDown() {
    this.decEvent.emit({ value: -1 });
    this.decPressed = true;
  }
  decMouseUp() {
    this.decPressed = false;
  }
  handleHover() {
    this.toggle = true;
  }
  handleLeave() {
    this.toggle = false;
  }
  incControl() {
    if (this.incPressed && this.numberOfTimesPressed > 3) {
      this.incEvent.emit({ value: +1 });
    }
    else if (this.incPressed) {
      this.numberOfTimesPressed++;
    }
    else if (!this.incPressed && !this.decPressed) {
      this.numberOfTimesPressed = 0;
    }
  }
  decControl() {
    if (this.decPressed && this.numberOfTimesPressed > 3) {
      this.decEvent.emit({ value: -1 });
    }
    else if (this.decPressed) {
      this.numberOfTimesPressed++;
    }
    else if (!this.incPressed && !this.incPressed) {
      this.numberOfTimesPressed = 0;
    }
  }
  pressedControl() {
    this.incControl();
    this.decControl();
  }
  init() {
    if (!this.initState) {
      this.initState = true;
      setInterval(() => {
        this.pressedControl();
      }, 100);
    }
  }
  componentDidRender() {
    this.init();
  }
  static get is() { return "cpc-input-number-v2"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-input-number-v2.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-input-number-v2.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      },
      "label": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "toggle": {}
    };
  }
  static get events() {
    return [{
        "method": "incEvent",
        "name": "increment",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ value: number }",
          "resolved": "{ value: number; }",
          "references": {}
        }
      }, {
        "method": "decEvent",
        "name": "decrement",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ value: number }",
          "resolved": "{ value: number; }",
          "references": {}
        }
      }, {
        "method": "inputChangeEvent",
        "name": "inputChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "InputEvent",
          "resolved": "InputEvent",
          "references": {
            "InputEvent": {
              "location": "import",
              "path": "../cpc-input-v1/cpc-input-v1"
            }
          }
        }
      }, {
        "method": "cleanSelectionEvent",
        "name": "cleanSelection",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "InputEvent",
          "resolved": "InputEvent",
          "references": {
            "InputEvent": {
              "location": "import",
              "path": "../cpc-input-v1/cpc-input-v1"
            }
          }
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "mouseover",
        "method": "handleHover",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "mouseleave",
        "method": "handleLeave",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
