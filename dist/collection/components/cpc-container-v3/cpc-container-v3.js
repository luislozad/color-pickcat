import { Host, h } from '@stencil/core';
export class CpcContainerV3 {
  constructor() {
    this.active = false;
  }
  render() {
    const borderActive = this.active ? ({ '--border-color': '#0099ff' }) : undefined;
    return (h(Host, { style: borderActive }, h("slot", null)));
  }
  restoreToDefaultState(e) {
    const path = e.path || (e.composedPath && e.composedPath());
    if (this.active && !path.includes(this.el)) {
      this.active = false;
      this.restoreStateEvent.emit({ state: this.active });
    }
  }
  componentWillLoad() {
    document.addEventListener('click', (e) => this.restoreToDefaultState(e));
  }
  static get is() { return "cpc-container-v3"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-container-v3.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-container-v3.css"]
    };
  }
  static get properties() {
    return {
      "active": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "restoreStateEvent",
        "name": "restoreState",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ state: boolean }",
          "resolved": "{ state: boolean; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
