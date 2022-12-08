import type { Components, JSX } from "../types/components";

interface CpcAlphaControl extends Components.CpcAlphaControl, HTMLElement {}
export const CpcAlphaControl: {
  prototype: CpcAlphaControl;
  new (): CpcAlphaControl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
