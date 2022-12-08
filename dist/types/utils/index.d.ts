import { HsvaColor } from 'colord';
export declare function setDefaultMode(): void;
export declare function parseArray<T>(str: string): T[];
export declare function calcPositionPoint(hsv: HsvaColor, opts: {
  width: number;
  height: number;
  radius: number;
}): {
  x: number;
  y: number;
};
export declare function convertToHSVA(x: number, y: number, opts: {
  hue: number;
  width: number;
  height: number;
}): {
  h: number;
  s: number;
  v: number;
  a: number;
};
