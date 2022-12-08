import { EventEmitter } from '../../stencil-public-runtime';
export interface InputEvent {
  change?: {
    value: string;
  };
  selection?: {
    action: boolean;
  };
  cleanSelection?: {
    action: boolean;
  };
}
export declare class CpcInputV1 {
  value?: number | string;
  placeholder?: string;
  selection: boolean;
  cleanSelection: boolean;
  el: HTMLElement;
  changeEvent: EventEmitter<InputEvent>;
  selectionEvent: EventEmitter<InputEvent>;
  cleanSelectionEvent: EventEmitter<InputEvent>;
  private refInput;
  render(): any;
  componentDidUpdate(): void;
  componentWillLoad(): void;
}
