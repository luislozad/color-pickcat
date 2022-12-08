import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './cpc-input-v12.js';

const UpIcon = `<?xml version="1.0" encoding="utf-8"?>
<svg width="6" height="4" fill="currentColor" viewBox="438.808 239.617 4.714 3.668" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
  <path d="M 440.475 240.129 Q 441.165 239.105 441.855 240.129 L 443.292 242.261 Q 443.982 243.285 442.602 243.285 L 439.728 243.285 Q 438.348 243.285 439.038 242.261 Z" style="" bx:shape="triangle 438.348 239.105 5.634 4.18 0.5 0.245 1@856f4e34"/>
</svg>`;

const DownIcon = `<?xml version="1.0" encoding="utf-8"?>
<svg width="6" height="4" fill="currentColor" viewBox="444.091 242.895 4.714 3.668" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
  <path d="M -447.138 -246.051 Q -446.448 -247.075 -445.758 -246.051 L -444.321 -243.919 Q -443.631 -242.895 -445.011 -242.895 L -447.885 -242.895 Q -449.265 -242.895 -448.575 -243.919 Z" style="" transform="matrix(-1, 0, 0, -1, 0, 0)" bx:shape="triangle -449.265 -247.075 5.634 4.18 0.5 0.245 1@8c34f239"/>
</svg>`;

const cpcInputNumberV2Css = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.static{position:static}.mx-1{margin-left:.25rem;margin-right:.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.mt-2{margin-top:.5rem}.ml-2{margin-left:.5rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-px{height:1px}.h-8{height:2rem}.h-full{height:100%}.w-px{width:1px}.w-5{width:1.25rem}.w-auto{width:auto}.w-16{width:4rem}.w-full{width:100%}.grow{flex-grow:1}.cursor-text{cursor:text}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;user-select:text}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.self-stretch{align-self:stretch}.border-0{border-width:0}.bg-transparent{background-color:transparent}.pl-2{padding-left:.5rem}.pb-0{padding-bottom:0}.pr-2{padding-right:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-0{outline-width:0}*{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji} /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}.bg-\\[\\#f3f3f3\\]{--tw-bg-opacity:1;background-color:rgb(243 243 243/var(--tw-bg-opacity))}.text-\\[\\#999999\\]{--tw-text-opacity:1;color:rgb(153 153 153/var(--tw-text-opacity))}:host{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(243 243 243/var(--tw-bg-opacity));border-radius:.5rem;color:rgb(153 153 153/var(--tw-text-opacity));display:flex;height:2rem;padding-left:.5rem;width:auto}.mt-2\\.5{margin-top:.625rem}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.pb-0\\.5{padding-bottom:.125rem}.hover\\:bg-\\[\\#eeeeee\\]:hover{--tw-bg-opacity:1;background-color:rgb(238 238 238/var(--tw-bg-opacity))}.active\\:bg-\\[\\#dddddd\\]:active{--tw-bg-opacity:1;background-color:rgb(221 221 221/var(--tw-bg-opacity))}.text-\\[10px\\]{font-size:10px}.text-\\[\\#333333\\]{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.selection\\:bg-transparent ::-moz-selection{background-color:transparent}.selection\\:bg-transparent ::selection{background-color:transparent}.selection\\:bg-transparent::-moz-selection{background-color:transparent}.selection\\:bg-transparent::selection{background-color:transparent}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.my-1\\.5{margin-bottom:.375rem;margin-top:.375rem}.w-\\[18px\\]{width:18px}";

const CpcInputNumberV2 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.incEvent = createEvent(this, "increment", 7);
    this.decEvent = createEvent(this, "decrement", 7);
    this.numberOfTimesPressed = 0;
    this.incPressed = false;
    this.decPressed = false;
    this.initState = false;
    this.value = 0;
    this.label = undefined;
    this.toggle = false;
  }
  render() {
    const displayControls = this.toggle ? 'flex' : 'hidden';
    return (h(Host, null, h("cpc-input-v1", { class: `w-px h-8 grow cursor-text text-[#333333] text-sm`, value: this.value }), this.label && !this.toggle ? (h("div", { class: 'text-[10px] uppercase pr-2' }, this.label)) : null, h("div", { class: `w-5 flex flex-col self-stretch ${displayControls}` }, h("div", { onMouseDown: () => this.incMouseDown(), onMouseUp: () => this.incMouseUp(), class: 'flex cursor-pointer h-px grow justify-center items-center', innerHTML: UpIcon }), h("div", { onMouseDown: () => this.decMouseDown(), onMouseUp: () => this.decMouseUp(), class: 'flex cursor-pointer h-px grow justify-center items-center', innerHTML: DownIcon }))));
  }
  incMouseDown() {
    this.incEvent.emit({ value: +1 });
    this.incPressed = true;
  }
  incMouseUp() {
    this.incPressed = false;
  }
  decMouseDown() {
    this.decEvent.emit({ value: -1 });
    this.decPressed = true;
  }
  decMouseUp() {
    this.decPressed = false;
  }
  handleHover() {
    this.toggle = true;
  }
  handleLeave() {
    this.toggle = false;
  }
  incControl() {
    if (this.incPressed && this.numberOfTimesPressed > 3) {
      this.incEvent.emit({ value: +1 });
    }
    else if (this.incPressed) {
      this.numberOfTimesPressed++;
    }
    else if (!this.incPressed && !this.decPressed) {
      this.numberOfTimesPressed = 0;
    }
  }
  decControl() {
    if (this.decPressed && this.numberOfTimesPressed > 3) {
      this.decEvent.emit({ value: -1 });
    }
    else if (this.decPressed) {
      this.numberOfTimesPressed++;
    }
    else if (!this.incPressed && !this.incPressed) {
      this.numberOfTimesPressed = 0;
    }
  }
  pressedControl() {
    this.incControl();
    this.decControl();
  }
  init() {
    if (!this.initState) {
      this.initState = true;
      setInterval(() => {
        this.pressedControl();
      }, 100);
    }
  }
  componentDidRender() {
    this.init();
  }
  static get style() { return cpcInputNumberV2Css; }
}, [1, "cpc-input-number-v2", {
    "value": [1032],
    "label": [1025],
    "toggle": [32]
  }, [[1, "mouseover", "handleHover"], [1, "mouseleave", "handleLeave"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cpc-input-number-v2", "cpc-input-v1"];
  components.forEach(tagName => { switch (tagName) {
    case "cpc-input-number-v2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CpcInputNumberV2);
      }
      break;
    case "cpc-input-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CpcInputNumberV2 as C, defineCustomElement as d };
