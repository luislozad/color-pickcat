import { setMode } from '@stencil/core';
import { HsvaColor } from 'colord';

export function setDefaultMode() {
  setMode((elm) => {
    const elmMode = (elm as any).mode || elm.getAttribute('mode');
    if (elmMode) {
      return elmMode;
    } else {
      return 'default';
    }
  });  
}

export function parseArray<T>(str: string) {
  try {
    const arr = JSON.parse(str.replace(/'/g, '"'));

    if (Array.isArray(arr)) {
      return arr as T[];
    }

    return undefined;
  } catch(_e) {
    return undefined;
  }
}

export function calcPositionPoint(hsv: HsvaColor, opts: { width: number; height: number; radius: number; }) {
  const { width, height, radius } = opts;
  const handleStart = radius;
  const handleRangeX = width - radius * 2;
  const handleRangeY = height - radius * 2;
  return { 
    x: handleStart + (hsv.s / 100) * handleRangeX,
    y: handleStart + (handleRangeY - ((hsv.v / 100) * handleRangeY))
  }
}

export function convertToHSVA(x: number, y: number, opts: { hue: number; width: number; height: number; }) {
  const { width, height, hue } = opts;

  const hsva = {
    h: hue,
    s: x / width * 100,
    v: 100 - (y / height * 100),
    a: 1
  };
  
  return hsva;
}

export function isAlphaValid(number: number, opts: { min: number; max: number; }) {
  const { min, max } = opts;

  if (number <= max && number >= min) {
    return true;
  }
  return false;
}