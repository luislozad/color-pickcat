import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { w, c as calcPositionPoint, d as defineCustomElement$b, a as convertToHSVA } from './cpc-color-area2.js';
import { d as defineCustomElement$d } from './cpc-alpha-control2.js';
import { d as defineCustomElement$c } from './cpc-button-v32.js';
import { d as defineCustomElement$a } from './cpc-container-v32.js';
import { d as defineCustomElement$9 } from './cpc-divisor-v12.js';
import { d as defineCustomElement$8 } from './cpc-eye-dropper2.js';
import { d as defineCustomElement$7 } from './cpc-hue-control2.js';
import { d as defineCustomElement$6 } from './cpc-input-color2.js';
import { d as defineCustomElement$5 } from './cpc-input-number-v22.js';
import { d as defineCustomElement$4 } from './cpc-input-v12.js';
import { d as defineCustomElement$3 } from './cpc-menu-v12.js';
import { d as defineCustomElement$2 } from './cpc-popup-v12.js';

const colorPickcatCss = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.static{position:static}.mx-1{margin-left:.25rem;margin-right:.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.mt-2{margin-top:.5rem}.ml-2{margin-left:.5rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-8{height:2rem}.h-px{height:1px}.h-full{height:100%}.w-px{width:1px}.w-5{width:1.25rem}.w-16{width:4rem}.w-full{width:100%}.grow{flex-grow:1}.cursor-text{cursor:text}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;user-select:text}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.self-stretch{align-self:stretch}.border-0{border-width:0}.bg-transparent{background-color:transparent}.pl-2{padding-left:.5rem}.pb-0{padding-bottom:0}.pr-2{padding-right:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-0{outline-width:0}*{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji} /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:host{display:flex;flex-direction:column;width:260px}.mt-2\\.5{margin-top:.625rem}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.pb-0\\.5{padding-bottom:.125rem}.hover\\:bg-\\[\\#eeeeee\\]:hover{--tw-bg-opacity:1;background-color:rgb(238 238 238/var(--tw-bg-opacity))}.active\\:bg-\\[\\#dddddd\\]:active{--tw-bg-opacity:1;background-color:rgb(221 221 221/var(--tw-bg-opacity))}.text-\\[10px\\]{font-size:10px}.text-\\[\\#333333\\]{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.selection\\:bg-transparent ::-moz-selection{background-color:transparent}.selection\\:bg-transparent ::selection{background-color:transparent}.selection\\:bg-transparent::-moz-selection{background-color:transparent}.selection\\:bg-transparent::selection{background-color:transparent}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.my-1\\.5{margin-bottom:.375rem;margin-top:.375rem}.w-\\[18px\\]{width:18px}";

const ColorPickcat$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.colorEvent = createEvent(this, "color", 7);
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
    return (h(Host, { id: 'clr-picker', class: 'clr-picker' }, h("cpc-color-area", { onLoadedComponent: ({ detail }) => this.init(detail.selectedColorDetail), colorMarker: this.colorMarker, colorArea: this.colorArea, handlerPos: this.handlerPos, onSelectedColor: ({ detail }) => this.onSelectedColor(detail) }), h("div", { class: 'flex' }, h("div", { class: 'space-y-2.5' }, h("cpc-hue-control", { value: w(this.colorArea).hue(), class: 'mt-2.5', onHueValue: ({ detail }) => this.onHueValue(detail) }), h("cpc-alpha-control", { alpha: this.alphaValue, onAlphaValue: ({ detail }) => this.alphaValue = detail.value, color: this.colorMarker }), h("cpc-input-color", { value: this.convertColorType(this.colorType, this.colorMarker), colors: this.colorTypes, onSelectedColor: ({ detail }) => this.colorType = detail.currentColor })), h("div", { class: 'ml-2 flex flex-col w-16 space-y-1.5' }, h("cpc-eye-dropper", { onGetColor: (e) => this.handlerEyeDropper(e), class: 'mt-2' }), h("cpc-container-v3", null, h("cpc-input-number-v2", { class: 'pb-0.5', value: `${Math.floor(this.alphaValue)}%`, onIncrement: () => this.alphaValue === 100 ? 100 : this.alphaValue++, onDecrement: () => this.alphaValue === 0 ? 0 : this.alphaValue-- }))))));
  }
  onColorMarker() {
    this.colorEvent.emit({ value: this.colorMarker });
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
      case 'RGB': return w(color).toRgbString();
      case 'HSL': return w(color).toHslString();
      default: return w(color).toHex();
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
      return w(hsva).toHex();
    }
    const hue = w(value).hue();
    hsva.h = hue;
    return w(hsva).toHex();
  }
  getMarkerPosition() {
    const { width, height } = this.colorAreaDetail.colorAreaDims;
    const hsva = w(this.colorMarker).toHsv();
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
      return w(newHsva).toHex();
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
      rgb: w(color).toRgb(),
      hsl: w(color).toHsl(),
      hex: w(color).toHex()
    };
    const hsva = w(color).toHsv();
    const newPos = this.calcPositionMarker(hsva);
    newColorAreaDetail.pos = newPos;
    return newColorAreaDetail;
  }
  handlerEyeDropper({ detail }) {
    const { sRGBHex } = detail;
    const newColorAreaDetail = this.newSelectedColorDetail(sRGBHex);
    this.setSelectedColorDetail(newColorAreaDetail);
    this.colorArea = this.getColorArea(sRGBHex);
  }
  get ref() { return this; }
  static get watchers() { return {
    "colorMarker": ["onColorMarker"]
  }; }
  static get style() { return colorPickcatCss; }
}, [1, "color-pickcat", {
    "colorMarker": [1025, "color"],
    "colorArea": [1025, "color-area"],
    "containerActive": [32],
    "inputSelection": [32],
    "colorAreaDetail": [32],
    "colorType": [32],
    "alphaValue": [32],
    "handlerPos": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["color-pickcat", "cpc-alpha-control", "cpc-button-v3", "cpc-color-area", "cpc-container-v3", "cpc-divisor-v1", "cpc-eye-dropper", "cpc-hue-control", "cpc-input-color", "cpc-input-number-v2", "cpc-input-v1", "cpc-menu-v1", "cpc-popup-v1"];
  components.forEach(tagName => { switch (tagName) {
    case "color-pickcat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorPickcat$1);
      }
      break;
    case "cpc-alpha-control":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "cpc-button-v3":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "cpc-color-area":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "cpc-container-v3":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "cpc-divisor-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "cpc-eye-dropper":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "cpc-hue-control":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "cpc-input-color":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "cpc-input-number-v2":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "cpc-input-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "cpc-menu-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "cpc-popup-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ColorPickcat = ColorPickcat$1;
const defineCustomElement = defineCustomElement$1;

export { ColorPickcat, defineCustomElement };
