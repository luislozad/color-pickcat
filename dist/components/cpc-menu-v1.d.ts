import type { Components, JSX } from "../types/components";

interface CpcMenuV1 extends Components.CpcMenuV1, HTMLElement {}
export const CpcMenuV1: {
  prototype: CpcMenuV1;
  new (): CpcMenuV1;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
