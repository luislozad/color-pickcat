import { h, Host } from '@stencil/core';
export class CpcInputColor {
  constructor() {
    this.colors = [];
    this.value = '#FFFFFF';
    this.containerActive = false;
    this.inputSelection = false;
    this.openMenu = false;
  }
  render() {
    return (h(Host, null, h("cpc-container-v3", { active: this.containerActive, class: 'flex', onRestoreState: ({ detail }) => this.containerActive = detail.state }, h("div", { class: 'w-full pl-2 cursor-text' }, h("cpc-input-v1", { onInputChange: ({ detail }) => this.onInputChange(detail), selection: this.inputSelection, class: 'text-sm uppercase w-full h-full pb-0.5', value: this.value })), h("cpc-menu-v1", { openMenu: this.openMenu, data: [{ items: this.colors }], onItem: ({ detail }) => this.handlerMenuSelection(detail.name), onClick: () => this.handlerOpenMenu() }))));
  }
  handleClick() {
    if (!this.containerActive) {
      this.containerActive = true;
      //this.inputSelection = true;
    }
  }
  onInputChange(detail) {
    this.inputChangeEvent.emit(detail);
  }
  handlerMenuSelection(currentColor) {
    this.selectedColor.emit({ currentColor });
  }
  handlerOpenMenu() {
    this.openMenu = !this.openMenu;
  }
  static get is() { return "cpc-input-color"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-input-color.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-input-color.css"]
    };
  }
  static get properties() {
    return {
      "colors": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
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
        "defaultValue": "'#FFFFFF'"
      }
    };
  }
  static get states() {
    return {
      "containerActive": {},
      "inputSelection": {},
      "openMenu": {}
    };
  }
  static get events() {
    return [{
        "method": "selectedColor",
        "name": "selectedColor",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ currentColor: string }",
          "resolved": "{ currentColor: string; }",
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
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "handleClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
