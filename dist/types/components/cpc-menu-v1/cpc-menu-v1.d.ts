import { EventEmitter } from '../../stencil-public-runtime';
export interface CpcMenuV1Props {
  items: string[];
}
export declare type CpcMenuV1Hover = CpcMenuV1Props[] | undefined;
export interface CpcMenuV1Item {
  name: string;
}
export declare class CpcMenuV1 {
  data?: CpcMenuV1Props[];
  openMenu: boolean;
  hover: EventEmitter<CpcMenuV1Hover>;
  item: EventEmitter<CpcMenuV1Item>;
  render(): any;
  handleHover(): void;
}
