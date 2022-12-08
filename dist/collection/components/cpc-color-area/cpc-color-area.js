import { Host, h } from '@stencil/core';
import { calcPositionPoint } from '../../utils';
import { colord } from 'colord';
export class CpcColorArea {
  constructor() {
    this.colorAreaDims = { width: 0, height: 0, x: 0, y: 0 };
    this.offset = { x: 0, y: 0 };
    this.loaded = false;
    this.handlerMoveMarker = (e) => {
      this.updateColorAreaDims();
      this.moveMarker(e);
    };
    this.colorArea = '#FF0000';
    this.colorMarker = '#FFFFFF';
    this.handlerRadius = 0;
    this.alphaValue = 100;
    this.handlerPos = undefined;
  }
  render() {
    return (h(Host, { role: 'application' }, h("div", { ref: (ref) => this.refMarker = ref, tabindex: '0' })));
  }
  updateColorAreaDims() {
    this.colorAreaDims = {
      width: this.ref.offsetWidth,
      height: this.ref.offsetHeight,
      x: this.ref.offsetLeft + this.offset.x,
      y: this.ref.offsetTop + this.offset.y
    };
  }
  updateColorArea() {
    const colorArea = this.getColorArea();
    this.ref.style.color = colorArea;
  }
  calcPositionMarker(hsv) {
    const { width, height } = this.colorAreaDims;
    const radius = this.handlerRadius;
    return calcPositionPoint(hsv, { width, height, radius });
  }
  updatePositionMarker() {
    const hsva = colord(this.colorMarker).toHsv();
    const { x, y } = this.handlerPos ? this.handlerPos : this.calcPositionMarker(hsva);
    this.setPositionMarker(x, y);
  }
  updateColorMarker() {
    this.refMarker.style.color = this.colorMarker;
  }
  init() {
    if (!this.loaded) {
      this.loaded = true;
      this.updateColorAreaDims();
      this.updateColorArea();
      this.updatePositionMarker();
      this.updateColorMarker();
    }
  }
  getColorArea() {
    const colorArea = this.colorArea;
    return colord(colorArea).toHex();
  }
  convertToHSVA(x, y) {
    const hueValue = colord(this.colorArea).hue();
    const hsva = {
      h: hueValue,
      s: x / this.colorAreaDims.width * 100,
      v: 100 - (y / this.colorAreaDims.height * 100),
      a: this.alphaValue / 100
    };
    return hsva;
  }
  selectedColorEmit(x, y) {
    const hsva = this.convertToHSVA(x, y);
    const color = {
      rgb: colord(hsva).toRgb(),
      hsl: colord(hsva).toHsl(),
      hex: colord(hsva).toHex(),
    };
    this.selectedColorEvent.emit({ color, pos: { x, y }, colorAreaDims: this.colorAreaDims });
  }
  getPositionMarker() {
    const { top, left } = window.getComputedStyle(this.refMarker);
    const x = Number(left.replace('px', ''));
    const y = Number(top.replace('px', ''));
    return { x, y };
  }
  handlerStateColorArea() {
    this.ref.style.color = this.colorArea;
  }
  hanndlerStateColorMarker() {
    this.updatePositionMarker();
    this.updateColorMarker();
  }
  handleMouseDown() {
    document.addEventListener('mousemove', this.handlerMoveMarker);
  }
  handleClick(e) {
    this.handlerMoveMarker(e);
  }
  onHandlerPos() {
    this.updatePositionMarker();
  }
  getPointerPosition(event) {
    return {
      pageX: event.changedTouches ? event.changedTouches[0].pageX : event.pageX,
      pageY: event.changedTouches ? event.changedTouches[0].pageY : event.pageY
    };
  }
  setPositionMarker(x, y) {
    this.refMarker.style.left = `${x}px`;
    this.refMarker.style.top = `${y}px`;
  }
  moveMarker(event) {
    const pointer = this.getPointerPosition(event);
    let x = pointer.pageX - this.colorAreaDims.x;
    let y = pointer.pageY - this.colorAreaDims.y;
    x = (x < 0) ? 0 : (x > this.colorAreaDims.width) ? this.colorAreaDims.width : x;
    y = (y < 0) ? 0 : (y > this.colorAreaDims.height) ? this.colorAreaDims.height : y;
    this.setPositionMarker(x, y);
    this.selectedColorEmit(x, y);
    // Prevent scrolling while dragging the marker
    event.preventDefault();
    event.stopPropagation();
  }
  getSelectedColorDetail() {
    const { x, y } = this.getPositionMarker();
    const hsva = this.convertToHSVA(x, y);
    const color = {
      rgb: colord(hsva).toRgb(),
      hsl: colord(hsva).toHsl(),
      hex: colord(hsva).toHex(),
    };
    const selectedColorDetail = {
      color,
      pos: { x, y },
      colorAreaDims: this.colorAreaDims,
    };
    return selectedColorDetail;
  }
  loadedComponentEventEmit() {
    const selectedColorDetail = this.getSelectedColorDetail();
    this.loadedComponentEvent.emit({ selectedColorDetail });
  }
  componentDidLoad() {
    this.loadedComponentEventEmit();
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', this.handlerMoveMarker);
    });
  }
  componentDidRender() {
    this.init();
  }
  static get is() { return "cpc-color-area"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cpc-color-area.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cpc-color-area.css"]
    };
  }
  static get properties() {
    return {
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
        "defaultValue": "'#FF0000'"
      },
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
        "attribute": "color-marker",
        "reflect": false,
        "defaultValue": "'#FFFFFF'"
      },
      "handlerRadius": {
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
        "attribute": "handler-radius",
        "reflect": false,
        "defaultValue": "0"
      },
      "alphaValue": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "alpha-value",
        "reflect": false,
        "defaultValue": "100"
      },
      "handlerPos": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Position",
          "resolved": "{ x: number; y: number; }",
          "references": {
            "Position": {
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
      }
    };
  }
  static get events() {
    return [{
        "method": "selectedColorEvent",
        "name": "selectedColor",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SelectedColorDetail",
          "resolved": "SelectedColorDetail",
          "references": {
            "SelectedColorDetail": {
              "location": "local"
            }
          }
        }
      }, {
        "method": "loadedComponentEvent",
        "name": "loadedComponent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ selectedColorDetail: SelectedColorDetail }",
          "resolved": "{ selectedColorDetail: SelectedColorDetail; }",
          "references": {
            "SelectedColorDetail": {
              "location": "local"
            }
          }
        }
      }];
  }
  static get elementRef() { return "ref"; }
  static get watchers() {
    return [{
        "propName": "colorArea",
        "methodName": "handlerStateColorArea"
      }, {
        "propName": "colorMarker",
        "methodName": "hanndlerStateColorMarker"
      }, {
        "propName": "handlerPos",
        "methodName": "onHandlerPos"
      }];
  }
  static get listeners() {
    return [{
        "name": "mousedown",
        "method": "handleMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "click",
        "method": "handleClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
