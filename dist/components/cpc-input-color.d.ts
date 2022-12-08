import type { Components, JSX } from "../types/components";

interface CpcInputColor extends Components.CpcInputColor, HTMLElement {}
export const CpcInputColor: {
  prototype: CpcInputColor;
  new (): CpcInputColor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
