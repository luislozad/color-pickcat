/* ColorPickcat custom elements */
export { ColorPickcat as ColorPickcat } from '../types/components/color-pickcat/color-pickcat';
export { CpcAlphaControl as CpcAlphaControl } from '../types/components/cpc-alpha-control/cpc-alpha-control';
export { CpcButtonV3 as CpcButtonV3 } from '../types/components/cpc-button-v3/cpc-button-v3';
export { CpcColorArea as CpcColorArea } from '../types/components/cpc-color-area/cpc-color-area';
export { CpcContainerV3 as CpcContainerV3 } from '../types/components/cpc-container-v3/cpc-container-v3';
export { CpcDivisorV1 as CpcDivisorV1 } from '../types/components/cpc-divisor-v1/cpc-divisor-v1';
export { CpcEyeDropper as CpcEyeDropper } from '../types/components/cpc-eye-dropper/cpc-eye-dropper';
export { CpcHueControl as CpcHueControl } from '../types/components/cpc-hue-control/cpc-hue-control';
export { CpcInputAlpha as CpcInputAlpha } from '../types/components/cpc-input-alpha/cpc-input-alpha';
export { CpcInputColor as CpcInputColor } from '../types/components/cpc-input-color/cpc-input-color';
export { CpcInputNumberV2 as CpcInputNumberV2 } from '../types/components/cpc-input-number-v2/cpc-input-number-v2';
export { CpcInputV1 as CpcInputV1 } from '../types/components/cpc-input-v1/cpc-input-v1';
export { CpcMenuV1 as CpcMenuV1 } from '../types/components/cpc-menu-v1/cpc-menu-v1';
export { CpcPopupV1 as CpcPopupV1 } from '../types/components/cpc-popup-v1/cpc-popup-v1';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
