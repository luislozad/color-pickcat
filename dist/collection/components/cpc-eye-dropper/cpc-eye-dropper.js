import { Host, h } from '@stencil/core';
import DropperIcon from '../../assets/dropper+icon.svg';
export class CpcEyeDropper {
  constructor() {
    this.eyeDropper = ('EyeDropper' in window) ? new window.EyeDropper() : undefined;
  }
  render() {
    return (h(Host, null, h("cpc-container-v3", { title: 'Sample Color', class: `flex hover:bg-[#eeeeee] active:bg-[#dddddd]`, tabindex: '0' }, h("button", { class: 'flex items-center outline-0	border-0 bg-transparent justify-center w-full h-full', innerHTML: DropperIcon }))));
  }
  async handlerClick() {
    if (this.eyeDropper) {
      try {
        this.openEyeDropperEvent.emit({ state: true });
        const color = await this.eyeDropper.open();
        const { sRGBHex } = color;
        this.getColorEvent.emit({ sRGBHex });
      }
      catch (_) {
        this.closeEyeDropperEvent.emit({ state: false });
      }
    }
  }
  static get is() { return "cpc-eye-dropper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-eye-dropper.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-eye-dropper.css"]
    };
  }
  static get events() {
    return [{
        "method": "getColorEvent",
        "name": "getColor",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ sRGBHex: string }",
          "resolved": "{ sRGBHex: string; }",
          "references": {}
        }
      }, {
        "method": "openEyeDropperEvent",
        "name": "openEyeDropper",
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
      }, {
        "method": "closeEyeDropperEvent",
        "name": "closeEyeDropper",
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
  static get listeners() {
    return [{
        "name": "click",
        "method": "handlerClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
