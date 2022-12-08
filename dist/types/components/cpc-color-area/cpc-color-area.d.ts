import { EventEmitter } from '../../stencil-public-runtime';
import { RgbaColor, HslColor, HsvaColor } from 'colord';
export declare type Position = {
  x: number;
  y: number;
};
export interface SelectedColorDetail {
  pos: Position;
  color: {
    rgb: RgbaColor;
    hsl: HslColor;
    hex: string;
  };
  colorAreaDims: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}
export declare class CpcColorArea {
  colorArea?: string;
  colorMarker?: string;
  handlerRadius?: number;
  alphaValue: number;
  handlerPos?: Position;
  ref: HTMLElement;
  selectedColorEvent: EventEmitter<SelectedColorDetail>;
  loadedComponentEvent: EventEmitter<{
    selectedColorDetail: SelectedColorDetail;
  }>;
  private colorAreaDims;
  private offset;
  private loaded;
  private refMarker;
  render(): any;
  updateColorAreaDims(): void;
  updateColorArea(): void;
  calcPositionMarker(hsv: HsvaColor): {
    x: number;
    y: number;
  };
  updatePositionMarker(): void;
  updateColorMarker(): void;
  init(): void;
  handlerMoveMarker: (e: MouseEvent & TouchEvent) => void;
  getColorArea(): string;
  convertToHSVA(x: number, y: number): {
    h: number;
    s: number;
    v: number;
    a: number;
  };
  selectedColorEmit(x: number, y: number): void;
  getPositionMarker(): {
    x: number;
    y: number;
  };
  handlerStateColorArea(): void;
  hanndlerStateColorMarker(): void;
  handleMouseDown(): void;
  handleClick(e: MouseEvent & TouchEvent): void;
  onHandlerPos(): void;
  getPointerPosition(event: MouseEvent & TouchEvent): {
    pageX: number;
    pageY: number;
  };
  setPositionMarker(x: number, y: number): void;
  moveMarker(event: MouseEvent & TouchEvent): void;
  getSelectedColorDetail(): {
    color: {
      rgb: RgbaColor;
      hsl: import("colord").HslaColor;
      hex: string;
    };
    pos: {
      x: number;
      y: number;
    };
    colorAreaDims: {
      width: number;
      height: number;
      x: number;
      y: number;
    };
  };
  loadedComponentEventEmit(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
}
