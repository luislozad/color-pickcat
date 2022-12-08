import type { Components, JSX } from "../types/components";

interface CpcInputV1 extends Components.CpcInputV1, HTMLElement {}
export const CpcInputV1: {
  prototype: CpcInputV1;
  new (): CpcInputV1;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
