import { Component, Host, h, Listen, Event, EventEmitter } from '@stencil/core';
import DropperIcon from '../../assets/dropper+icon.svg';

@Component({
  tag: 'cpc-eye-dropper',
  styleUrl: 'cpc-eye-dropper.css',
  shadow: true,
})
export class CpcEyeDropper {
  @Event({ eventName: 'getColor' }) getColorEvent: EventEmitter<{ sRGBHex: string }>;

  @Event({ eventName: 'openEyeDropper' }) openEyeDropperEvent: EventEmitter<{ state: boolean }>;
  @Event({ eventName: 'closeEyeDropper' }) closeEyeDropperEvent: EventEmitter<{ state: boolean }>;

  private eyeDropper = ('EyeDropper' in window) ? new (window as any).EyeDropper() : undefined;

  render() {
    return (
      <Host>
        <cpc-container-v3 title='Sample Color' class={`flex hover:bg-[#eeeeee] active:bg-[#dddddd]`} tabindex='0'>
          <button class={'flex items-center outline-0	border-0 bg-transparent justify-center w-full h-full'} innerHTML={DropperIcon}></button>
        </cpc-container-v3>
      </Host>
    );
  }

  @Listen('click')
  async handlerClick() {
    if (this.eyeDropper) {
      try {
        this.openEyeDropperEvent.emit({ state: true });

        const color = await this.eyeDropper.open();
        const { sRGBHex } = color;

        this.getColorEvent.emit({ sRGBHex });
      } catch (_) {
        this.closeEyeDropperEvent.emit({ state: false });
      }
    }
  }
}
