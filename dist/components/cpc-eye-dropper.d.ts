import type { Components, JSX } from "../types/components";

interface CpcEyeDropper extends Components.CpcEyeDropper, HTMLElement {}
export const CpcEyeDropper: {
  prototype: CpcEyeDropper;
  new (): CpcEyeDropper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
