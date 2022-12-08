import { Host, h } from '@stencil/core';
export class CpcInputV1 {
  constructor() {
    this.value = undefined;
    this.placeholder = undefined;
    this.selection = false;
    this.cleanSelection = false;
  }
  render() {
    const handleChange = (value) => {
      this.changeEvent.emit({ change: { value } });
    };
    const editable = this.selection;
    const bgSelection = !editable ? 'selection:bg-transparent' : '';
    const pointerEvents = editable ? 'pointer-events-auto' : 'pointer-events-none';
    const userSelectInput = editable ? 'select-text' : 'select-none';
    return (h(Host, null, h("input", { onChange: (e) => handleChange(e.target.value), class: `bg-transparent outline-0 border-0 block w-full h-full ${bgSelection} ${pointerEvents} ${userSelectInput}`, ref: (ref) => this.refInput = ref, type: 'text', value: this.value, placeholder: this.placeholder, disabled: !editable, autoComplete: 'nope', autoCorrect: 'off', spellcheck: false })));
  }
  componentDidUpdate() {
    if (this.refInput && this.selection && !this.cleanSelection) {
      this.refInput.select();
    }
  }
  componentWillLoad() {
    document.addEventListener('click', (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (this.selection && !path.includes(this.el)) {
        const selection = false;
        const cleanSelection = true;
        this.selectionEvent.emit({ selection: { action: selection } });
        this.cleanSelectionEvent.emit({ cleanSelection: { action: cleanSelection } });
        this.selection = selection;
        this.cleanSelection = cleanSelection;
      }
      else if (!this.selection && path.includes(this.el)) {
        const selection = true;
        const cleanSelection = false;
        this.selectionEvent.emit({ selection: { action: selection } });
        this.cleanSelectionEvent.emit({ cleanSelection: { action: cleanSelection } });
        this.selection = selection;
        this.cleanSelection = cleanSelection;
      }
    });
  }
  static get is() { return "cpc-input-v1"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-input-v1.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-input-v1.css"]
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
        "reflect": false
      },
      "placeholder": {
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
        "attribute": "placeholder",
        "reflect": false
      },
      "selection": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "selection",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "cleanSelection": {}
    };
  }
  static get events() {
    return [{
        "method": "changeEvent",
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
              "location": "local"
            }
          }
        }
      }, {
        "method": "selectionEvent",
        "name": "inputSelection",
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
              "location": "local"
            }
          }
        }
      }, {
        "method": "cleanSelectionEvent",
        "name": "inputCleanSelection",
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
              "location": "local"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
}
