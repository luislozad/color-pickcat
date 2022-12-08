import { Component, Host, h, Prop, Event, EventEmitter, Watch, State, Listen } from '@stencil/core';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';

export interface AlphaValueEvent {
  value: number;
}

@Component({
  tag: 'cpc-input-alpha',
  styleUrl: 'cpc-input-alpha.css',
  shadow: true,
})
export class CpcInputAlpha {
  @Prop({ mutable: true }) value: number = 100;

  @Event({ eventName: 'alphaValue' }) alphaValueEvent: EventEmitter<AlphaValueEvent>;

  @Event({ eventName: 'inputAlphaChange' }) inputAlphaChangeEvent: EventEmitter<InputEvent>;

  @State() containerActive = false;

  render() {
    return (
      <Host>
        <cpc-container-v3 active={this.containerActive} onRestoreState={({ detail }) => this.onContainerActiveRestoreState(detail)} class={'flex'}>
          <cpc-input-number-v2
            class={'w-full h-full'}
            value={`${Math.floor(this.value)}%`} 
            onInputChange={({ detail }) => this.onInputAlphaChangeEvent(detail)}
            onIncrement={() => this.onIncrement()}
            onDecrement={() => this.onDecrement()}>
          </cpc-input-number-v2>
        </cpc-container-v3>
      </Host>
    );
  }

  @Listen('click')
  hanlderClick() {
    this.containerActive = true;
  }

  @Watch('value')
  onStateAlphaValue() {
    this.alphaValueEvent.emit({ value: this.value });
  }

  onInputAlphaChangeEvent(detail: InputEvent) {
    this.inputAlphaChangeEvent.emit(detail);
  }

  onContainerActiveRestoreState(detail: { state: boolean }) {
    this.containerActive = detail.state;
  }

  onIncrement() {
    if (this.value < 100) {
      this.value++
    }    
  }

  onDecrement() {
    if (this.value > 0) {
      this.value--;
    }
  }

}
