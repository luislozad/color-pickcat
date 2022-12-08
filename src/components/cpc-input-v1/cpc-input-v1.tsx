import { Component, Host, h, Prop, State, Element, Event, EventEmitter } from '@stencil/core';

export interface InputEvent {
  change?: {
    value: string
  };
  selection?: {
    action: boolean;
  };
  cleanSelection?: {
    action: boolean;
  }
}

@Component({
  tag: 'cpc-input-v1',
  styleUrl: 'cpc-input-v1.css',
  shadow: true,
})
export class CpcInputV1 {
  @Prop({ mutable: true }) value?: number | string;
  @Prop({ mutable: true }) placeholder?: string;  
  @Prop({ mutable: true }) selection: boolean = false;
  
  @State() cleanSelection: boolean = false;
  
  @Element() el: HTMLElement;
  
  @Event({ eventName: 'inputChange' }) changeEvent: EventEmitter<InputEvent>;
  @Event({ eventName: 'inputSelection' }) selectionEvent: EventEmitter<InputEvent>;
  @Event({ eventName: 'inputCleanSelection' }) cleanSelectionEvent: EventEmitter<InputEvent>;
  
  private refInput: HTMLInputElement;

  render() {
    const handleChange = (value: string) => {
      this.changeEvent.emit({ change: { value } });
    };
    
    const editable = this.selection;
    const bgSelection = !editable ? 'selection:bg-transparent' : '';
    const pointerEvents = editable ? 'pointer-events-auto' : 'pointer-events-none';
    const userSelectInput = editable ? 'select-text' : 'select-none';
    
    return (
      <Host>
        <input onChange={(e) => handleChange((e.target as any).value as string)} class={`bg-transparent outline-0 border-0 block w-full h-full ${bgSelection} ${pointerEvents} ${userSelectInput}`} ref={(ref) => this.refInput = ref} type='text' value={this.value} placeholder={this.placeholder} disabled={!editable} autoComplete={'nope'} autoCorrect={'off'} spellcheck={false} />
      </Host>
    );
  }
  
  componentDidUpdate() {    
    if (this.refInput && this.selection && !this.cleanSelection) {
      this.refInput.select();
    }
  }
  
  componentWillLoad() {
    document.addEventListener('click', (e) => {
      const path = (e as any).path as EventTarget[] || (e.composedPath && e.composedPath());
      if (this.selection && !path.includes(this.el)) {
        const selection = false;
        const cleanSelection = true;
        
        this.selectionEvent.emit({ selection: { action: selection } });
        this.cleanSelectionEvent.emit({ cleanSelection: { action: cleanSelection } });
        
        this.selection = selection;
        this.cleanSelection = cleanSelection;
      } else if (!this.selection && path.includes(this.el)) {
        const selection = true;
        const cleanSelection = false;
        
        this.selectionEvent.emit({ selection: { action: selection } });
        this.cleanSelectionEvent.emit({ cleanSelection: { action: cleanSelection } });        
                      
        this.selection = selection;
        this.cleanSelection = cleanSelection;
      }
    });
  }
}
