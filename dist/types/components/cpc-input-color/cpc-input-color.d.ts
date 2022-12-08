import { EventEmitter } from '../../stencil-public-runtime';
export declare class CpcInputColor {
  colors: string[];
  value: string;
  containerActive: boolean;
  inputSelection: boolean;
  openMenu: boolean;
  selectedColor: EventEmitter<{
    currentColor: string;
  }>;
  render(): any;
  handleClick(): void;
  handlerMenuSelection(currentColor: string): void;
  handlerOpenMenu(): void;
}
