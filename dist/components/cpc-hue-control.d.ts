import type { Components, JSX } from "../types/components";

interface CpcHueControl extends Components.CpcHueControl, HTMLElement {}
export const CpcHueControl: {
  prototype: CpcHueControl;
  new (): CpcHueControl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
