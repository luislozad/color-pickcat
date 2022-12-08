import { proxyCustomElement, HTMLElement, createEvent, h as h$1, Host } from '@stencil/core/internal/client';

function calcPositionPoint(hsv, opts) {
  const { width, height, radius } = opts;
  const handleStart = radius;
  const handleRangeX = width - radius * 2;
  const handleRangeY = height - radius * 2;
  return {
    x: handleStart + (hsv.s / 100) * handleRangeX,
    y: handleStart + (handleRangeY - ((hsv.v / 100) * handleRangeY))
  };
}
function convertToHSVA(x, y, opts) {
  const { width, height, hue } = opts;
  const hsva = {
    h: hue,
    s: x / width * 100,
    v: 100 - (y / height * 100),
    a: 1
  };
  return hsva;
}

var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return "string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return (r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return {r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return {r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return {h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return {r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return {h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return {h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e;},c=function(r){return {h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u;},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return {h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return [e,t[n][1]]}return [null,void 0]},x=function(r){return "string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},M=function(r,t){var n=c(r);return {h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return (299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return {h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1};}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i;},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u;},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u;},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r;},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r;},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return "number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t;},r.prototype.hue=function(r){var t=c(this.rgba);return "number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)};

const cpcColorAreaCss = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.static{position:static}.absolute{position:absolute}.relative{position:relative}.mx-1{margin-left:.25rem;margin-right:.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.mt-2{margin-top:.5rem}.ml-2{margin-left:.5rem}.block{display:block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-8{height:2rem}.h-px{height:1px}.h-full{height:100%}.w-px{width:1px}.w-5{width:1.25rem}.w-16{width:4rem}.w-full{width:100%}.grow{flex-grow:1}.cursor-text{cursor:text}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;user-select:text}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.self-stretch{align-self:stretch}.border{border-width:1px}.border-0{border-width:0}.bg-transparent{background-color:transparent}.pl-2{padding-left:.5rem}.pb-0{padding-bottom:0}.pr-2{padding-right:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-0{outline-width:0}*{box-sizing:border-box;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji} /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}:host{background-image:linear-gradient(transparent,#000),linear-gradient(90deg,#fff,currentColor);border-radius:3px 3px 0 0;cursor:default;display:block;height:125px;position:relative;width:100%}:host>div{background-color:currentColor;border:1px solid #fff;border-radius:50%;cursor:pointer;height:12px;margin:-6px 0 0 -6px;position:absolute;width:12px}.mt-2\\.5{margin-top:.625rem}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.625rem*var(--tw-space-y-reverse));margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.pb-0\\.5{padding-bottom:.125rem}.hover\\:bg-\\[\\#eeeeee\\]:hover{--tw-bg-opacity:1;background-color:rgb(238 238 238/var(--tw-bg-opacity))}.active\\:bg-\\[\\#dddddd\\]:active{--tw-bg-opacity:1;background-color:rgb(221 221 221/var(--tw-bg-opacity))}.text-\\[10px\\]{font-size:10px}.text-\\[\\#333333\\]{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.selection\\:bg-transparent ::-moz-selection{background-color:transparent}.selection\\:bg-transparent ::selection{background-color:transparent}.selection\\:bg-transparent::-moz-selection{background-color:transparent}.selection\\:bg-transparent::selection{background-color:transparent}.mx-1\\.5{margin-left:.375rem;margin-right:.375rem}.my-1\\.5{margin-bottom:.375rem;margin-top:.375rem}.w-\\[18px\\]{width:18px}";

const CpcColorArea = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.selectedColorEvent = createEvent(this, "selectedColor", 7);
    this.loadedComponentEvent = createEvent(this, "loadedComponent", 7);
    this.colorAreaDims = { width: 0, height: 0, x: 0, y: 0 };
    this.offset = { x: 0, y: 0 };
    this.loaded = false;
    this.handlerMoveMarker = (e) => this.moveMarker(e);
    this.colorArea = '#FF0000';
    this.colorMarker = '#FFFFFF';
    this.handlerRadius = 0;
    this.alphaValue = 100;
    this.handlerPos = undefined;
  }
  render() {
    return (h$1(Host, { role: 'application' }, h$1("div", { ref: (ref) => this.refMarker = ref, tabindex: '0' })));
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
    const hsva = w(this.colorMarker).toHsv();
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
    return w(colorArea).toHex();
  }
  convertToHSVA(x, y) {
    const hueValue = w(this.colorArea).hue();
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
      rgb: w(hsva).toRgb(),
      hsl: w(hsva).toHsl(),
      hex: w(hsva).toHex(),
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
      pageX: event.pageX,
      pageY: event.pageY
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
      rgb: w(hsva).toRgb(),
      hsl: w(hsva).toHsl(),
      hex: w(hsva).toHex(),
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
  get ref() { return this; }
  static get watchers() { return {
    "colorArea": ["handlerStateColorArea"],
    "colorMarker": ["hanndlerStateColorMarker"],
    "handlerPos": ["onHandlerPos"]
  }; }
  static get style() { return cpcColorAreaCss; }
}, [1, "cpc-color-area", {
    "colorArea": [1025, "color-area"],
    "colorMarker": [1025, "color-marker"],
    "handlerRadius": [1026, "handler-radius"],
    "alphaValue": [1026, "alpha-value"],
    "handlerPos": [1040]
  }, [[1, "mousedown", "handleMouseDown"], [0, "click", "handleClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cpc-color-area"];
  components.forEach(tagName => { switch (tagName) {
    case "cpc-color-area":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CpcColorArea);
      }
      break;
  } });
}

export { CpcColorArea as C, convertToHSVA as a, calcPositionPoint as c, defineCustomElement as d, w };
