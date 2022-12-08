import { Host, h } from '@stencil/core';
export class CpcPopupV1 {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "cpc-popup-v1"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-popup-v1.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-popup-v1.css"]
    };
  }
}
