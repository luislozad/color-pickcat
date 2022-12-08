import { Host, h } from '@stencil/core';
export class CpcButtonV3 {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "cpc-button-v3"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-button-v3.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-button-v3.css"]
    };
  }
}
