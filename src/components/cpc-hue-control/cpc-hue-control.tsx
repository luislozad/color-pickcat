import { Component, Host, h, Event, EventEmitter, Prop, Watch } from '@stencil/core';

export interface HueEvent {
  value: number;
}

@Component({
  tag: 'cpc-hue-control',
  styleUrl: 'cpc-hue-control.css',
  shadow: true,
})
export class CpcHueControl {
  @Prop({ mutable: true }) value?: number = 0;
  
  @Event({ eventName: 'hueValue' }) hueValueEvent: EventEmitter<HueEvent>;

  private hueMarker: HTMLDivElement;

  private loaded = false;

  render() {
    return (
      <Host>
        <input onInput={(e) => this.handlerInput(e)} type='range' min='0' max='360' step='1' value={this.value} />
        <div id='hue-marker-container'>
          <div ref={(ref) => this.hueMarker = ref} id='hue-marker'></div>
        </div>
      </Host>
    );
  }

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;

    const hue = Number(target.value);

    this.value = hue;
    
    this.hueValueEvent.emit({ value: hue });
  }

  setPositionHueMarker(hue: number, max: number) {
    this.hueMarker.style.left = `${hue / 360 * max}%`;
  }

  updatePositionHueMarker() {
    const max = 100;
    const hue = this.value;

    this.setPositionHueMarker(hue, max);
  }

  init() {
    if (!this.loaded) {
      this.loaded = true;
      this.updatePositionHueMarker();
    }
  }

  componentDidRender() {
    this.init();
  }

  @Watch('value')
  handlerHueValue() {
    this.updatePositionHueMarker();
  }
}
