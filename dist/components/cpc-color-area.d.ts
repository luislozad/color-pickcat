import type { Components, JSX } from "../types/components";

interface CpcColorArea extends Components.CpcColorArea, HTMLElement {}
export const CpcColorArea: {
  prototype: CpcColorArea;
  new (): CpcColorArea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
