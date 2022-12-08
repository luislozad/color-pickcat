import { EventEmitter } from '../../stencil-public-runtime';
export declare class CpcEyeDropper {
  getColorEvent: EventEmitter<{
    sRGBHex: string;
  }>;
  openEyeDropperEvent: EventEmitter<{
    state: boolean;
  }>;
  closeEyeDropperEvent: EventEmitter<{
    state: boolean;
  }>;
  private eyeDropper;
  render(): any;
  handlerClick(): Promise<void>;
}
