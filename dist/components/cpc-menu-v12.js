import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './cpc-button-v32.js';
import { d as defineCustomElement$2 } from './cpc-divisor-v12.js';
import { d as defineCustomElement$1 } from './cpc-popup-v12.js';

const MoreIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <path d="M0 0h18v18H0z" fill="none"/>
    <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"/>
</svg>
`;

const cpcMenuV1Css = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.static{position:static}.relative{position:relative}.mx-1{margin-left:.25rem;margin-right:.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.mt-2{margin-top:.5rem}.ml-2{margin-left:.5rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-8{height:2rem}.h-px{height:1px}.h-7{height:1.75rem}.h-full{height:100%}.w-px{width:1px}.w-5{width:1.25rem}.w-8{width:2rem}.w-16{width:4rem}.w-full{width:100%}.grow{flex-grow:1}.cursor-text{cursor:text}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;user-select:text}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.self-stretch{align-self:stretch}.border-0{border-width:0}.bg-transparent{background-color:transparent}.pl-2{padding-left:.5rem}.pb-0{padding-bottom:0}.pr-2{padding-right:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-0{outline-width:0}*{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji} /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:host{display:block;height:1.75rem;padding-left:.5rem;padding-right:.5rem;position:relative;width:2rem}.mt-2\\.5{margin-top:.625rem}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.pb-0\\.5{padding-bottom:.125rem}.hover\\:bg-\\[\\#eeeeee\\]:hover{--tw-bg-opacity:1;background-color:rgb(238 238 238/var(--tw-bg-opacity))}.active\\:bg-\\[\\#dddddd\\]:active{--tw-bg-opacity:1;background-color:rgb(221 221 221/var(--tw-bg-opacity))}.text-\\[10px\\]{font-size:10px}.text-\\[\\#333333\\]{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.selection\\:bg-transparent ::-moz-selection{background-color:transparent}.selection\\:bg-transparent ::selection{background-color:transparent}.selection\\:bg-transparent::-moz-selection{background-color:transparent}.selection\\:bg-transparent::selection{background-color:transparent}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.my-1\\.5{margin-bottom:.375rem;margin-top:.375rem}.w-\\[18px\\]{width:18px}";

const CpcMenuV1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hover = createEvent(this, "hover", 7);
    this.item = createEvent(this, "item", 7);
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
  static get style() { return cpcMenuV1Css; }
}, [1, "cpc-menu-v1", {
    "data": [1040],
    "openMenu": [1028, "open-menu"]
  }, [[1, "mouseover", "handleHover"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cpc-menu-v1", "cpc-button-v3", "cpc-divisor-v1", "cpc-popup-v1"];
  components.forEach(tagName => { switch (tagName) {
    case "cpc-menu-v1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CpcMenuV1);
      }
      break;
    case "cpc-button-v3":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "cpc-divisor-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "cpc-popup-v1":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CpcMenuV1 as C, defineCustomElement as d };
