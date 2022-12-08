import { EventEmitter } from '../../stencil-public-runtime';
import { HsvaColor } from 'colord';
import { Position, SelectedColorDetail } from '../cpc-color-area/cpc-color-area';
import { HueEvent } from '../cpc-hue-control/cpc-hue-control';
export interface ColorEvent {
  value: string;
}
export declare class ColorPickcat {
  colorMarker?: string;
  colorArea?: string;
  containerActive: boolean;
  inputSelection: boolean;
  colorAreaDetail?: SelectedColorDetail;
  colorType: string;
  alphaValue: number;
  handlerPos?: Position;
  ref: HTMLElement;
  colorEvent: EventEmitter<ColorEvent>;
  private colorTypes;
  render(): any;
  onColorMarker(): void;
  onSelectedColor(detail: SelectedColorDetail): void;
  onHueValue(color: HueEvent): void;
  convertColorType(type: string, color: string): string;
  getHSVADefault(): {
    h: number;
    s: number;
    v: number;
    a: number;
  };
  getColorArea(value: number | string): string;
  getMarkerPosition(): {
    x: number;
    y: number;
  };
  calcPositionMarker(hsva: HsvaColor): {
    x: number;
    y: number;
  };
  getColorMarker(data?: SelectedColorDetail | number): string;
  init(detail: SelectedColorDetail): void;
  setSelectedColorDetail(data: SelectedColorDetail): void;
  newSelectedColorDetail(color: string): SelectedColorDetail;
  handlerEyeDropper({ detail }: {
    detail: {
      sRGBHex: string;
    };
  }): void;
}
