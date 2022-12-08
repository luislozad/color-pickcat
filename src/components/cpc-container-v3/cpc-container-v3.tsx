import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'cpc-container-v3',
  styleUrl: 'cpc-container-v3.css',
  shadow: true,
})
export class CpcContainerV3 {
  @Prop({ mutable: true }) active?: boolean = false;

  @Element() el: HTMLElement;

  @Event({ eventName: 'restoreState' }) restoreStateEvent: EventEmitter<{ state: boolean }>;

  render() {
    const borderActive = this.active ? ({ '--border-color': '#0099ff' }) : undefined;
    return (
      <Host style={borderActive}>
        <slot></slot>
      </Host>
    );
  }

  restoreToDefaultState(e: MouseEvent) {
    const path = (e as any).path as EventTarget[] || (e.composedPath && e.composedPath());
    if (this.active && !path.includes(this.el)) {
      this.active = false;

      this.restoreStateEvent.emit({ state: this.active });
    }
  }

  componentWillLoad() {
    document.addEventListener('click', (e) => this.restoreToDefaultState(e));
  }
}
