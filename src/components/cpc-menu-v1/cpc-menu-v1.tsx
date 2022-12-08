import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import MoreIcon from '../../assets/more+icon.svg';

export interface CpcMenuV1Props {
  items: string[];
}

export type CpcMenuV1Hover = CpcMenuV1Props[] | undefined;

export interface CpcMenuV1Item {
  name: string;
}

@Component({
  tag: 'cpc-menu-v1',
  styleUrl: 'cpc-menu-v1.css',
  shadow: true,
})
export class CpcMenuV1 {
  @Prop({ mutable: true }) data?: CpcMenuV1Props[];
  
  @Prop({ mutable: true }) openMenu: boolean = false;
  
  @Event({ eventName: 'hover' }) hover: EventEmitter<CpcMenuV1Hover>;
  @Event({ eventName: 'item' }) item: EventEmitter<CpcMenuV1Item>;
  
  render() {
    const { openMenu, data } = this;
    
    const handleItem = (name: string) => {
      this.item.emit({ name });
    };
    
    const renderPopupItem = ({ items }: CpcMenuV1Props, i: number, arr: CpcMenuV1Props[]) => {
      return (
        <div class='flex flex-col'>
          {
            items.map((value) => (
              <cpc-button-v3 class='mx-1.5 flex justify-start items-center' onClick={() => handleItem(value)}>{value}</cpc-button-v3>
            ))
          }
          {
            i !== (arr.length - 1) ? (
              <cpc-divisor-v1 class='my-1.5'></cpc-divisor-v1>
            ) : null
          }
        </div>
      )
    };
    
    return (
      <Host>
        <button class='flex items-center justify-center w-[18px] h-full' innerHTML={MoreIcon}></button>
        {
          openMenu && data ? (
            <cpc-popup-v1>
              <div class='flex flex-col'>
                {
                  data.map(renderPopupItem)
                }
              </div>
            </cpc-popup-v1>
          ) : null
        }
      </Host>
    );
  }
  
  @Listen('mouseover')
  handleHover() {
    this.hover.emit(this.data);
  }
}
