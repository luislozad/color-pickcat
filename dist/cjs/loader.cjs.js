'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5f7d9006.js');

/*
 Stencil Client Patch Esm v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["color-pickcat_14.cjs",[[1,"color-pickcat",{"colorMarker":[1025,"color"],"colorArea":[1025,"color-area"],"alphaValue":[1538,"alpha"],"containerActive":[32],"inputSelection":[32],"colorAreaDetail":[32],"colorType":[32],"handlerPos":[32]}],[1,"cpc-input-color",{"colors":[1040],"value":[1025],"containerActive":[32],"inputSelection":[32],"openMenu":[32]},[[0,"click","handleClick"]]],[1,"cpc-input-alpha",{"value":[1026],"containerActive":[32]},[[0,"click","hanlderClick"]]],[1,"cpc-eye-dropper",null,[[0,"click","handlerClick"]]],[1,"cpc-alpha-control",{"color":[1025],"alpha":[1026]}],[1,"cpc-color-area",{"colorArea":[1025,"color-area"],"colorMarker":[1025,"color-marker"],"handlerRadius":[1026,"handler-radius"],"alphaValue":[1026,"alpha-value"],"handlerPos":[1040]},[[1,"mousedown","handleMouseDown"],[0,"click","handleClick"]]],[1,"cpc-hue-control",{"value":[1026]}],[1,"cpc-menu-v1",{"data":[1040],"openMenu":[1028,"open-menu"]},[[1,"mouseover","handleHover"]]],[1,"cpc-input-number-v2",{"value":[1032],"label":[1025],"toggle":[32]},[[1,"mouseover","handleHover"],[1,"mouseleave","handleLeave"]]],[1,"cpc-button-v3"],[1,"cpc-divisor-v1"],[1,"cpc-popup-v1"],[1,"cpc-container-v3",{"active":[1028]}],[1,"cpc-input-v1",{"value":[1032],"placeholder":[1025],"selection":[1028],"cleanSelection":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
