import { Host, h } from '@stencil/core';
import MoreIcon from '../../assets/more+icon.svg';
export class CpcMenuV1 {
  constructor() {
    this.data = undefined;
    this.openMenu = false;
  }
  render() {
    const { openMenu, data } = this;
    const handleItem = (name) => {
      this.item.emit({ name });
    };
    const renderPopupItem = ({ items }, i, arr) => {
      return (h("div", { class: 'flex flex-col' }, items.map((value) => (h("cpc-button-v3", { class: 'mx-1.5 flex justify-start items-center', onClick: () => handleItem(value) }, value))), i !== (arr.length - 1) ? (h("cpc-divisor-v1", { class: 'my-1.5' })) : null));
    };
    return (h(Host, null, h("button", { class: 'flex items-center justify-center w-[18px] h-full', innerHTML: MoreIcon }), openMenu && data ? (h("cpc-popup-v1", null, h("div", { class: 'flex flex-col' }, data.map(renderPopupItem)))) : null));
  }
  handleHover() {
    this.hover.emit(this.data);
  }
  static get is() { return "cpc-menu-v1"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-menu-v1.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-menu-v1.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "CpcMenuV1Props[]",
          "resolved": "CpcMenuV1Props[]",
          "references": {
            "CpcMenuV1Props": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "openMenu": {
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
        "attribute": "open-menu",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "hover",
        "name": "hover",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "CpcMenuV1Hover",
          "resolved": "CpcMenuV1Props[]",
          "references": {
            "CpcMenuV1Hover": {
              "location": "local"
            }
          }
        }
      }, {
        "method": "item",
        "name": "item",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "CpcMenuV1Item",
          "resolved": "CpcMenuV1Item",
          "references": {
            "CpcMenuV1Item": {
              "location": "local"
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
      }];
  }
}
