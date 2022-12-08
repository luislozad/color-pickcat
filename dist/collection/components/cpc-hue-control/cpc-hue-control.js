import { Host, h } from '@stencil/core';
export class CpcHueControl {
  constructor() {
    this.loaded = false;
    this.value = 0;
  }
  render() {
    return (h(Host, null, h("input", { onInput: (e) => this.handlerInput(e), type: 'range', min: '0', max: '360', step: '1', value: this.value }), h("div", { id: 'hue-marker-container' }, h("div", { ref: (ref) => this.hueMarker = ref, id: 'hue-marker' }))));
  }
  handlerInput(e) {
    const target = e.target;
    const hue = Number(target.value);
    this.value = hue;
    this.hueValueEvent.emit({ value: hue });
  }
  setPositionHueMarker(hue, max) {
    this.hueMarker.style.left = `${hue / 360 * max}%`;
  }
  updatePositionHueMarker() {
    const max = 100;
    const hue = this.value;
    this.setPositionHueMarker(hue, max);
  }
  init() {
    if (!this.loaded) {
      this.loaded = true;
      this.updatePositionHueMarker();
    }
  }
  componentDidRender() {
    this.init();
  }
  handlerHueValue() {
    this.updatePositionHueMarker();
  }
  static get is() { return "cpc-hue-control"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-hue-control.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-hue-control.css"]
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      }
    };
  }
  static get events() {
    return [{
        "method": "hueValueEvent",
        "name": "hueValue",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "HueEvent",
          "resolved": "HueEvent",
          "references": {
            "HueEvent": {
              "location": "local"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "handlerHueValue"
      }];
  }
}
