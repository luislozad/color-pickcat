import type { Components, JSX } from "../types/components";

interface CpcInputAlpha extends Components.CpcInputAlpha, HTMLElement {}
export const CpcInputAlpha: {
  prototype: CpcInputAlpha;
  new (): CpcInputAlpha;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
