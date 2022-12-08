import { Host, h } from '@stencil/core';
import { calcPositionPoint, convertToHSVA, isAlphaValid } from '../../utils';
import { colord } from 'colord';
export class ColorPickcat {
  constructor() {
    this.colorTypes = ['RGB', 'HSL', 'HEX'];
    this.colorMarker = '#703493';
    this.colorArea = this.getColorArea('#a200ff');
    this.containerActive = false;
    this.inputSelection = false;
    this.colorAreaDetail = undefined;
    this.colorType = 'RGB';
    this.alphaValue = 100;
    this.handlerPos = undefined;
  }
  render() {
    return (h(Host, { class: 'clr-picker' }, h("cpc-color-area", { onLoadedComponent: ({ detail }) => this.init(detail.selectedColorDetail), colorMarker: this.colorMarker, colorArea: this.colorArea, handlerPos: this.handlerPos, onSelectedColor: ({ detail }) => this.onSelectedColor(detail) }), h("div", { class: 'flex' }, h("div", { class: 'space-y-2.5' }, h("cpc-hue-control", { value: colord(this.colorArea).hue(), class: 'mt-2.5', onHueValue: ({ detail }) => this.onHueValue(detail) }), h("cpc-alpha-control", { alpha: this.alphaValue, onAlphaValue: ({ detail }) => this.onAlphaValue(detail), color: this.colorMarker }), h("cpc-input-color", { onInputChange: ({ detail }) => this.onInputColorChange(detail), value: this.convertColorType(this.colorType, this.colorMarker), colors: this.colorTypes, onSelectedColor: ({ detail }) => this.colorType = detail.currentColor })), h("div", { class: 'ml-2 flex flex-col w-16 justify-between' }, h("cpc-eye-dropper", { onGetColor: (e) => this.handlerEyeDropper(e), class: 'mt-2' }), h("cpc-input-alpha", { value: this.alphaValue, onInputAlphaChange: ({ detail }) => this.onInputAlphaChange(detail), onAlphaValue: ({ detail }) => this.onAlphaValue(detail) })))));
  }
  onStateColorMarker() {
    this.colorEvent.emit({ value: this.colorMarker });
  }
  onStateAlphaValue() {
    this.alphaEvent.emit({ value: this.alphaValue });
  }
  onInputAlphaChange(detail) {
    const alphaValue = Number(detail.change.value.replace('%', ''));
    if (!isNaN(alphaValue) && alphaValue !== this.alphaValue) {
      if (isAlphaValid(alphaValue, { min: 0, max: 100 })) {
        this.alphaValue = alphaValue;
      }
    }
  }
  // Se activa cuando el usuario tipea manualmente un color
  // Valida que sea un color real y actualiza la UI
  // Si el color tipeado contiene un canal alpha, es separado para solo mostrar el color sin ese canal
  // esto lo hago para tener la UI limpia visualmente
  onInputColorChange(detail) {
    const newColor = detail.change.value;
    if (newColor !== this.colorMarker) {
      if (colord(newColor).isValid()) {
        if (colord(newColor).alpha() === 1) {
          this.updateUIColor(newColor);
        }
        else {
          const { r, g, b, a } = colord(newColor).toRgb();
          const newColorWithoutAlpha = colord({ r, g, b }).toHex();
          this.updateUIColor(newColorWithoutAlpha);
          this.alphaValue = a * 100;
        }
      }
    }
  }
  onAlphaValue(alpha) {
    this.alphaValue = alpha.value;
  }
  onSelectedColor(detail) {
    this.setSelectedColorDetail(detail);
  }
  onHueValue(color) {
    this.colorArea = this.getColorArea(color.value);
    this.colorMarker = this.getColorMarker(color.value);
  }
  convertColorType(type, color) {
    switch (type) {
      case 'RGB': return colord(color).toRgbString();
      case 'HSL': return colord(color).toHslString();
      default: return colord(color).toHex();
    }
  }
  getHSVADefault() {
    const hsva = {
      h: 0,
      s: 100,
      v: 100,
      a: 1
    };
    return hsva;
  }
  getColorArea(value) {
    const hsva = this.getHSVADefault();
    if (typeof (value) === 'number') {
      const hue = value;
      hsva.h = hue;
      return colord(hsva).toHex();
    }
    const hue = colord(value).hue();
    hsva.h = hue;
    return colord(hsva).toHex();
  }
  getMarkerPosition() {
    const { width, height } = this.colorAreaDetail.colorAreaDims;
    const hsva = colord(this.colorMarker).toHsv();
    const x = width * hsva.s / 100;
    const y = height - (height * hsva.v / 100);
    return { x, y };
  }
  calcPositionMarker(hsva) {
    const { width, height } = this.colorAreaDetail.colorAreaDims;
    const radius = 0;
    return calcPositionPoint(hsva, { width, height, radius });
  }
  getColorMarker(data) {
    if (typeof (data) !== 'number') {
      if (data) {
        const { color } = data;
        return color.hex;
      }
      return this.colorMarker;
    }
    else if (typeof (data) === 'number') {
      const { colorAreaDims, pos } = this.colorAreaDetail;
      const { width, height } = colorAreaDims;
      const hue = data;
      const { x, y } = pos;
      const newHsva = convertToHSVA(x, y, { hue, width, height });
      return colord(newHsva).toHex();
    }
    return this.colorMarker;
  }
  init(detail) {
    detail.color.hex = this.colorMarker;
    this.colorAreaDetail = detail;
  }
  setSelectedColorDetail(data) {
    this.handlerPos = Object.assign({}, data.pos);
    this.colorAreaDetail = data;
    this.colorMarker = this.getColorMarker(data);
  }
  newSelectedColorDetail(color) {
    const newColorAreaDetail = JSON.parse(JSON.stringify(this.colorAreaDetail));
    newColorAreaDetail.color = {
      rgb: colord(color).toRgb(),
      hsl: colord(color).toHsl(),
      hex: colord(color).toHex()
    };
    const hsva = colord(color).toHsv();
    const newPos = this.calcPositionMarker(hsva);
    newColorAreaDetail.pos = newPos;
    return newColorAreaDetail;
  }
  updateUIColor(color) {
    const newColorAreaDetail = this.newSelectedColorDetail(color);
    this.setSelectedColorDetail(newColorAreaDetail);
    this.colorArea = this.getColorArea(color);
  }
  handlerEyeDropper({ detail }) {
    const { sRGBHex } = detail;
    this.updateUIColor(sRGBHex);
  }
  static get is() { return "color-pickcat"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["color-pickcat.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["color-pickcat.css"]
    };
  }
  static get properties() {
    return {
      "colorMarker": {
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
        "defaultValue": "'#703493'"
      },
      "colorArea": {
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
        "attribute": "color-area",
        "reflect": false,
        "defaultValue": "this.getColorArea('#a200ff')"
      }
    };
  }
  static get states() {
    return {
      "containerActive": {},
      "inputSelection": {},
      "colorAreaDetail": {},
      "colorType": {},
      "alphaValue": {},
      "handlerPos": {}
    };
  }
  static get events() {
    return [{
        "method": "colorEvent",
        "name": "color",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "ColorEvent",
          "resolved": "ColorEvent",
          "references": {
            "ColorEvent": {
              "location": "local"
            }
          }
        }
      }, {
        "method": "alphaEvent",
        "name": "alpha",
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
              "location": "import",
              "path": "../cpc-alpha-control/cpc-alpha-control"
            }
          }
        }
      }];
  }
  static get elementRef() { return "ref"; }
  static get watchers() {
    return [{
        "propName": "colorMarker",
        "methodName": "onStateColorMarker"
      }, {
        "propName": "alphaValue",
        "methodName": "onStateAlphaValue"
      }];
  }
}
