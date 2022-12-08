import { Host, h } from '@stencil/core';
export class CpcAlphaControl {
  constructor() {
    this.loaded = false;
    this.color = '#FFFFFF';
    this.alpha = 100;
  }
  render() {
    return (h(Host, null, h("input", { onInput: (e) => this.handlerInput(e), type: 'range', min: '0', max: '100', step: '1', value: this.alpha }), h("div", { id: 'alpha-marker-container' }, h("div", { ref: (ref) => this.refAlphaMarker = ref, id: 'alpha-marker' })), h("span", { style: { color: this.color } })));
  }
  calcPositionMarker(value) {
    const pos = value / 100;
    return pos;
  }
  handlerInput(e) {
    const target = e.target;
    const value = Number(target.value);
    const pos = this.calcPositionMarker(value);
    this.setPositionMarker(pos);
    this.alphaValueEvent.emit({ value: pos * 100 });
  }
  updatePositionMarker() {
    this.setPositionMarker(this.alpha / 100);
  }
  setPositionMarker(alpha) {
    this.refAlphaMarker.style.left = `${alpha * 100}%`;
  }
  init() {
    if (!this.loaded) {
      this.loaded = true;
      this.updatePositionMarker();
    }
  }
  componentDidRender() {
    this.init();
  }
  handlerAlpha() {
    const pos = this.calcPositionMarker(this.alpha);
    this.setPositionMarker(pos);
  }
  static get is() { return "cpc-alpha-control"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-alpha-control.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-alpha-control.css"]
    };
  }
  static get properties() {
    return {
      "color": {
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
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'#FFFFFF'"
      },
      "alpha": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "alpha",
        "reflect": false,
        "defaultValue": "100"
      }
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
          "original": "AlphaEvent",
          "resolved": "AlphaEvent",
          "references": {
            "AlphaEvent": {
              "location": "local"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "alpha",
        "methodName": "handlerAlpha"
      }];
  }
}
