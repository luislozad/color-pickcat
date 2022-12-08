import { EventEmitter } from '../../stencil-public-runtime';
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
  private numberOfTimesPressed;
  private incPressed;
  private decPressed;
  private initState;
  render(): any;
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
