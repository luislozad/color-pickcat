import { EventEmitter } from '../../stencil-public-runtime';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';
export interface AlphaValueEvent {
  value: number;
}
export declare class CpcInputAlpha {
  value: number;
  alphaValueEvent: EventEmitter<AlphaValueEvent>;
  inputAlphaChangeEvent: EventEmitter<InputEvent>;
  containerActive: boolean;
  render(): any;
  hanlderClick(): void;
  onStateAlphaValue(): void;
  onInputAlphaChangeEvent(detail: InputEvent): void;
  onContainerActiveRestoreState(detail: {
    state: boolean;
  }): void;
  onIncrement(): void;
  onDecrement(): void;
}
