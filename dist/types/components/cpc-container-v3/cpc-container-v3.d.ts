import { EventEmitter } from '../../stencil-public-runtime';
export declare class CpcContainerV3 {
  active?: boolean;
  el: HTMLElement;
  restoreStateEvent: EventEmitter<{
    state: boolean;
  }>;
  render(): any;
  restoreToDefaultState(e: MouseEvent): void;
  componentWillLoad(): void;
}
