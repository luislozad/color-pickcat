import { EventEmitter } from '../../stencil-public-runtime';
export interface HueEvent {
  value: number;
}
export declare class CpcHueControl {
  value?: number;
  hueValueEvent: EventEmitter<HueEvent>;
  private hueMarker;
  private loaded;
  render(): any;
  handlerInput(e: Event): void;
  setPositionHueMarker(hue: number, max: number): void;
  updatePositionHueMarker(): void;
  init(): void;
  componentDidRender(): void;
  handlerHueValue(): void;
}
