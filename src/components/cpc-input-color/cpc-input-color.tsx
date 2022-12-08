import { Component, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';

@Component({
  tag: 'cpc-input-color',
  styleUrl: 'cpc-input-color.css',
  shadow: true,
})
export class CpcInputColor {
  @Prop({ mutable: true }) colors: string[] = [];

  @Prop({ mutable: true }) value: string = '#FFFFFF';

  @State() containerActive: boolean = false;
  @State() inputSelection: boolean = false;

  @State() openMenu: boolean = false;

  @Event({ eventName: 'selectedColor' }) selectedColor: EventEmitter<{ currentColor: string }>;
  @Event({ eventName: 'inputChange' }) inputChangeEvent: EventEmitter<InputEvent>;

  render() {
    return (
      <Host>
        <cpc-container-v3 active={this.containerActive} class={'flex'} onRestoreState={({ detail }) => this.containerActive = detail.state}>
          <div class={'w-full pl-2 cursor-text'}>
            <cpc-input-v1
              onInputChange={({ detail }) => this.onInputChange(detail)}
              selection={this.inputSelection} 
              class={'text-sm uppercase w-full h-full pb-0.5'} 
              value={this.value}>
            </cpc-input-v1>
          </div>
          <cpc-menu-v1 
            openMenu={this.openMenu} 
            data={[{ items: this.colors }]} 
            onItem={({ detail }) => this.handlerMenuSelection(detail.name)} 
            onClick={() => this.handlerOpenMenu()}>
            </cpc-menu-v1>
        </cpc-container-v3>
      </Host>
    );
  }

  @Listen('click')
  handleClick() {
    if (!this.containerActive) {
      this.containerActive = true;
      //this.inputSelection = true;
    }
  }

  onInputChange(detail: InputEvent) {
    this.inputChangeEvent.emit(detail);
  }

  handlerMenuSelection(currentColor: string) {
    this.selectedColor.emit({ currentColor });
  }

  handlerOpenMenu() {
    this.openMenu = !this.openMenu;
  }

}
