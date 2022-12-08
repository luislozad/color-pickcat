import { Host, h } from '@stencil/core';
export class CpcInputAlpha {
  constructor() {
    this.value = 100;
    this.containerActive = false;
  }
  render() {
    return (h(Host, null, h("cpc-container-v3", { active: this.containerActive, onRestoreState: ({ detail }) => this.onContainerActiveRestoreState(detail), class: 'flex' }, h("cpc-input-number-v2", { class: 'w-full h-full', value: `${Math.floor(this.value)}%`, onInputChange: ({ detail }) => this.onInputAlphaChangeEvent(detail), onIncrement: () => this.onIncrement(), onDecrement: () => this.onDecrement() }))));
  }
  hanlderClick() {
    this.containerActive = true;
  }
  onStateAlphaValue() {
    this.alphaValueEvent.emit({ value: this.value });
  }
  onInputAlphaChangeEvent(detail) {
    this.inputAlphaChangeEvent.emit(detail);
  }
  onContainerActiveRestoreState(detail) {
    this.containerActive = detail.state;
  }
  onIncrement() {
    if (this.value < 100) {
      this.value++;
    }
  }
  onDecrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
  static get is() { return "cpc-input-alpha"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-input-alpha.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-input-alpha.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "100"
      }
    };
  }
  static get states() {
    return {
      "containerActive": {}
    };
  }
  static get events() {
    return [{
        "method": "alphaValueEvent",
        "name": "alphaValue",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "AlphaValueEvent",
          "resolved": "AlphaValueEvent",
          "references": {
            "AlphaValueEvent": {
              "location": "local"
            }
          }
        }
      }, {
        "method": "inputAlphaChangeEvent",
        "name": "inputAlphaChange",
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
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onStateAlphaValue"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "hanlderClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
