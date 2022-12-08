import { Component, Host, h, Prop, State, Listen, Event, EventEmitter } from '@stencil/core';

import UpIcon from '../../assets/up+icon.svg';
import DownIcon from '../../assets/down+icon.svg';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';

@Component({
  tag: 'cpc-input-number-v2',
  styleUrl: 'cpc-input-number-v2.css',
  shadow: true,
})
export class CpcInputNumberV2 {
  @Prop({ mutable: true }) value?: number | string = 0;
  @Prop({ mutable: true }) label?: string;
    
  @State() toggle: boolean = false;
  
  @Event({ eventName: 'increment' }) incEvent: EventEmitter<{ value: number }>;
  @Event({ eventName: 'decrement' }) decEvent: EventEmitter<{ value: number }>;

  @Event({ eventName: 'inputChange' }) inputChangeEvent: EventEmitter<InputEvent>;

  @Event({ eventName: 'cleanSelection' }) cleanSelectionEvent: EventEmitter<InputEvent>;

  private numberOfTimesPressed = 0;

  private incPressed: boolean = false;
  private decPressed: boolean = false;

  private initState = false;
    
  render() {
    const displayControls = this.toggle ? 'flex' : 'hidden';
    
    return (
      <Host>
        <cpc-input-v1
          class={`w-px h-8 grow cursor-text text-[#333333] text-sm`} 
          onInputChange={({ detail }) => this.onInputChangeEvent(detail)}
          onInputCleanSelection={({ detail }) => this.onInputCleanSelection(detail)}
          value={this.value}>
        </cpc-input-v1>
        {
          this.label && !this.toggle ? (
            <div class='text-[10px] uppercase pr-2'>{this.label}</div>
          ) : null
        }
        <div class={`w-5 flex flex-col self-stretch ${displayControls}`}>
          <div
            onMouseDown={() => this.incMouseDown()} 
            onMouseUp={() => this.incMouseUp()} 
            class='flex cursor-pointer h-px grow justify-center items-center' 
            innerHTML={UpIcon}>
          </div>
          <div
            onMouseDown={() => this.decMouseDown()} 
            onMouseUp={() => this.decMouseUp()} 
            class='flex cursor-pointer h-px grow justify-center items-center' 
            innerHTML={DownIcon}>
          </div>
        </div>
      </Host>
    );
  }

  onInputChangeEvent(detail: InputEvent) {
    this.inputChangeEvent.emit(detail);
  }

  onInputCleanSelection(detail: InputEvent) {
    this.cleanSelectionEvent.emit({ cleanSelection: detail.cleanSelection });
  }

  incMouseDown() {
    this.incEvent.emit({ value: +1 });
    this.incPressed = true;
  }

  incMouseUp() {
    this.incPressed = false;
  }

  decMouseDown() {
    this.decEvent.emit({ value: -1 });
    this.decPressed = true;
  }

  decMouseUp() {
    this.decPressed = false;
  }
  
  @Listen('mouseover')
  handleHover() {
    this.toggle = true;
  }
  
  @Listen('mouseleave')
  handleLeave() {
    this.toggle = false;
  }

  incControl() {
    if (this.incPressed && this.numberOfTimesPressed > 3) {
      this.incEvent.emit({ value: +1 });
    } else if (this.incPressed) {
      this.numberOfTimesPressed++;
    } else if (!this.incPressed && !this.decPressed) {
      this.numberOfTimesPressed = 0;
    }
  }

  decControl() {
    if (this.decPressed && this.numberOfTimesPressed > 3) {
      this.decEvent.emit({ value: -1 });
    } else if (this.decPressed) {
      this.numberOfTimesPressed++;
    } else if (!this.incPressed && !this.incPressed) {
      this.numberOfTimesPressed = 0;
    }
  }

  pressedControl() {
    this.incControl();
    this.decControl();
  }

  init() {
    if (!this.initState) {
      this.initState = true;

      setInterval(() => {
        this.pressedControl();
      }, 100);
    }
  }

  componentDidRender() {
    this.init();
  }
}
