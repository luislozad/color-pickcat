import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cpcAlphaControlCss = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.static{position:static}.absolute{position:absolute}.relative{position:relative}.mx-1{margin-left:.25rem;margin-right:.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.mt-2{margin-top:.5rem}.ml-2{margin-left:.5rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-8{height:2rem}.h-px{height:1px}.h-full{height:100%}.w-px{width:1px}.w-5{width:1.25rem}.w-16{width:4rem}.w-full{width:100%}.grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-text{cursor:text}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;user-select:text}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.self-stretch{align-self:stretch}.border-0{border-width:0}.bg-transparent{background-color:transparent}.pl-2{padding-left:.5rem}.pb-0{padding-bottom:0}.pr-2{padding-right:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-0{outline-width:0}*{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji} /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:host{background-image:repeating-linear-gradient(45deg,#aaa 25%,transparent 0,transparent 75%,#aaa 0,#aaa),repeating-linear-gradient(45deg,#aaa 25%,#fff 0,#fff 75%,#aaa 0,#aaa);background-position:0 0,4px 4px;background-size:8px 8px;border-radius:4px;display:block;height:8px;position:relative}:host #alpha-marker-container{height:100%;margin:0 0 0 5px;pointer-events:none;position:absolute;width:calc(100% - 10px)}:host input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;cursor:pointer;display:block;inset:0;margin:0;opacity:0;position:absolute;width:100%}:host #alpha-marker{background-color:transparent;border-radius:50%;box-shadow:inset 0 0 0 3px #fff,inset 0 0 0 4px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1);height:14px;left:0;margin-left:-8px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);width:14px}:host span{background-image:linear-gradient(90deg,transparent,currentColor);border-radius:inherit;display:block;height:100%;width:100%}:host #alpha-marker:before{background-color:transparent;border-radius:50%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.mt-2\\.5{margin-top:.625rem}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.hover\\:bg-\\[\\#eeeeee\\]:hover{--tw-bg-opacity:1;background-color:rgb(238 238 238/var(--tw-bg-opacity))}.active\\:bg-\\[\\#dddddd\\]:active{--tw-bg-opacity:1;background-color:rgb(221 221 221/var(--tw-bg-opacity))}.pb-0\\.5{padding-bottom:.125rem}.text-\\[10px\\]{font-size:10px}.text-\\[\\#333333\\]{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.selection\\:bg-transparent ::-moz-selection{background-color:transparent}.selection\\:bg-transparent ::selection{background-color:transparent}.selection\\:bg-transparent::-moz-selection{background-color:transparent}.selection\\:bg-transparent::selection{background-color:transparent}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.my-1\\.5{margin-bottom:.375rem;margin-top:.375rem}.w-\\[18px\\]{width:18px}";

const CpcAlphaControl = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.alphaValueEvent = createEvent(this, "alphaValue", 7);
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
  static get watchers() { return {
    "alpha": ["handlerAlpha"]
  }; }
  static get style() { return cpcAlphaControlCss; }
}, [1, "cpc-alpha-control", {
    "color": [1025],
    "alpha": [1026]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cpc-alpha-control"];
  components.forEach(tagName => { switch (tagName) {
    case "cpc-alpha-control":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CpcAlphaControl);
      }
      break;
  } });
}

export { CpcAlphaControl as C, defineCustomElement as d };
