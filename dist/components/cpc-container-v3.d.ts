import type { Components, JSX } from "../types/components";

interface CpcContainerV3 extends Components.CpcContainerV3, HTMLElement {}
export const CpcContainerV3: {
  prototype: CpcContainerV3;
  new (): CpcContainerV3;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
