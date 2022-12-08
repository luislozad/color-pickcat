import type { Components, JSX } from "../types/components";

interface ColorPickcat extends Components.ColorPickcat, HTMLElement {}
export const ColorPickcat: {
  prototype: ColorPickcat;
  new (): ColorPickcat;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
