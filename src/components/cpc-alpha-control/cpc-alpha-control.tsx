import { Component, Host, h, Event, EventEmitter, Prop, Watch } from '@stencil/core';

export interface AlphaEvent {
  value: number;
}

@Component({
  tag: 'cpc-alpha-control',
  styleUrl: 'cpc-alpha-control.css',
  shadow: true,
})
export class CpcAlphaControl {
  @Prop({ mutable: true }) color?: string = '#FFFFFF';
  @Prop({ mutable: true }) alpha?: number = 100;

  @Event({ eventName: 'alphaValue' }) alphaValueEvent: EventEmitter<AlphaEvent>

  private refAlphaMarker: HTMLDivElement;

  private loaded: boolean = false;

  render() {
    return (
      <Host>
        <input onInput={(e) => this.handlerInput(e)} type='range' min='0' max='100' step='1' value={this.alpha} />
        <div id='alpha-marker-container'>
          <div ref={(ref) => this.refAlphaMarker = ref} id='alpha-marker'></div>
        </div>
        <span style={{ color: this.color }}></span> 
      </Host>
    );
  }

  calcPositionMarker(value: number) {
    const pos = value / 100;
    return pos;
  }

  handlerInput(e: Event) {
    const target = e.target as HTMLInputElement;

    const value = Number(target.value);

    const pos = this.calcPositionMarker(value);

    this.setPositionMarker(pos);

    this.alphaValueEvent.emit({ value: pos * 100 });
  }

  updatePositionMarker() {
    this.setPositionMarker(this.alpha / 100);
  }

  setPositionMarker(alpha: number) {
    this.refAlphaMarker.style.left = `${alpha * 100}%`;
  }

  init() {
    if (!this.loaded) {
      this.loaded = true;
      this.updatePositionMarker();
    }
  }

  componentDidRender() {
    this.init();
  }

  @Watch('alpha')
  handlerAlpha() {
    const pos = this.calcPositionMarker(this.alpha);
    this.setPositionMarker(pos);
  }
}
