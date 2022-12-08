import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cpc-popup-v1',
  styleUrl: 'cpc-popup-v1.css',
  shadow: true,
})
export class CpcPopupV1 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
