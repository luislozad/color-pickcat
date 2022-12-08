export enum Align {
  Left,
  Right,
  Top,
  Vertically,
  Horizontally,
  Bottom
};

export type AlignList = [Align, Align, Align, Align, Align, Align];
export type DistributeList = [Distribute, Distribute];

export enum Distribute {
  Vertically,
  Horizontally
};