import { EventEmitter } from '../../stencil-public-runtime';
export interface AlphaEvent {
  value: number;
}
export declare class CpcAlphaControl {
  color?: string;
  alpha?: number;
  alphaValueEvent: EventEmitter<AlphaEvent>;
  private refAlphaMarker;
  private loaded;
  render(): any;
  calcPositionMarker(value: number): number;
  handlerInput(e: Event): void;
  updatePositionMarker(): void;
  setPositionMarker(alpha: number): void;
  init(): void;
  componentDidRender(): void;
  handlerAlpha(): void;
}
