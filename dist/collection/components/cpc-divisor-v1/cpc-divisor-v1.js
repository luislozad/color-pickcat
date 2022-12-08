import { Host, h } from '@stencil/core';
export class CpcDivisorV1 {
  render() {
    return (h(Host, null));
  }
  static get is() { return "cpc-divisor-v1"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-divisor-v1.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-divisor-v1.css"]
    };
  }
}
