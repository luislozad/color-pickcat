import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cpc-button-v3',
  styleUrl: 'cpc-button-v3.css',
  shadow: true,
})
export class CpcButtonV3 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
