import { EventEmitter } from '../../stencil-public-runtime';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';
export declare class CpcInputColor {
  colors: string[];
  value: string;
  containerActive: boolean;
  inputSelection: boolean;
  openMenu: boolean;
  selectedColor: EventEmitter<{
    currentColor: string;
  }>;
  inputChangeEvent: EventEmitter<InputEvent>;
  render(): any;
  handleClick(): void;
  onInputChange(detail: InputEvent): void;
  handlerMenuSelection(currentColor: string): void;
  handlerOpenMenu(): void;
}
