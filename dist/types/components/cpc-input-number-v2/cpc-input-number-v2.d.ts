import { EventEmitter } from '../../stencil-public-runtime';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';
export declare class CpcInputNumberV2 {
  value?: number | string;
  label?: string;
  toggle: boolean;
  incEvent: EventEmitter<{
    value: number;
  }>;
  decEvent: EventEmitter<{
    value: number;
  }>;
  inputChangeEvent: EventEmitter<InputEvent>;
  cleanSelectionEvent: EventEmitter<InputEvent>;
  private numberOfTimesPressed;
  private incPressed;
  private decPressed;
  private initState;
  render(): any;
  onInputChangeEvent(detail: InputEvent): void;
  onInputCleanSelection(detail: InputEvent): void;
  incMouseDown(): void;
  incMouseUp(): void;
  decMouseDown(): void;
  decMouseUp(): void;
  handleHover(): void;
  handleLeave(): void;
  incControl(): void;
  decControl(): void;
  pressedControl(): void;
  init(): void;
  componentDidRender(): void;
}
