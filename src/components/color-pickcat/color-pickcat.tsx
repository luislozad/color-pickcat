import { Component, Host, h, Prop, State, Element, Event, EventEmitter, Watch } from '@stencil/core';
import { calcPositionPoint, convertToHSVA } from '../../utils';
import { colord, HsvaColor } from 'colord';
import { Position, SelectedColorDetail } from '../cpc-color-area/cpc-color-area';
import { HueEvent } from '../cpc-hue-control/cpc-hue-control';

export interface ColorEvent {
  value: string;
}

@Component({
  tag: 'color-pickcat',
  styleUrl: 'color-pickcat.css',
  shadow: true,
})
export class ColorPickcat {
  /*
    default:
      colorMarker: #FFFFFF
      colorArea: #FF0000
    test:
      colorMarker: #703493
      colorArea: #a200ff      
  */
  @Prop({ mutable: true, attribute: 'color' }) colorMarker?: string = '#703493';
  @Prop({ mutable: true }) colorArea?: string = this.getColorArea('#a200ff');

  @State() containerActive: boolean = false;
  @State() inputSelection: boolean = false;
  
  @State() colorAreaDetail?: SelectedColorDetail;
  
  @State() colorType: string = 'RGB';

  @State() alphaValue: number = 100;

  @State() handlerPos?: Position;

  @Element() ref: HTMLElement;

  @Event({ eventName: 'color' }) colorEvent: EventEmitter<ColorEvent>;
  
  private colorTypes: string[] = ['RGB', 'HSL', 'HEX'];

  render() {
    return (
      <Host id='clr-picker' class='clr-picker'>

        <cpc-color-area 
          onLoadedComponent={({ detail }) => this.init(detail.selectedColorDetail)} 
          colorMarker={this.colorMarker} 
          colorArea={this.colorArea}
          handlerPos={this.handlerPos}
          onSelectedColor={({ detail }) => this.onSelectedColor(detail)}>
        </cpc-color-area>

        <div class={'flex'}>

          <div class={'space-y-2.5'}>
            <cpc-hue-control 
              value={colord(this.colorArea).hue()}
              class={'mt-2.5'} 
              onHueValue={({ detail }) => this.onHueValue(detail)}>
            </cpc-hue-control>

            <cpc-alpha-control 
              alpha={this.alphaValue} 
              onAlphaValue={({ detail }) => this.alphaValue = detail.value} 
              color={this.colorMarker}>
            </cpc-alpha-control>

            <cpc-input-color 
              value={this.convertColorType(this.colorType, this.colorMarker)} 
              colors={this.colorTypes} 
              onSelectedColor={({ detail }) => this.colorType = detail.currentColor}>
            </cpc-input-color>
          </div>

          <div class={'ml-2 flex flex-col w-16 space-y-1.5'}>
            <cpc-eye-dropper onGetColor={(e) => this.handlerEyeDropper(e)} class={'mt-2'}></cpc-eye-dropper>

            <cpc-container-v3>
              <cpc-input-number-v2
                class={'pb-0.5'} 
                value={`${Math.floor(this.alphaValue)}%`} 
                onIncrement={() => this.alphaValue === 100 ? 100 : this.alphaValue++}
                onDecrement={() => this.alphaValue === 0 ? 0 : this.alphaValue--}>
              </cpc-input-number-v2>
            </cpc-container-v3>
          </div>
        </div>

      </Host>
    );
  }

  @Watch('colorMarker')
  onColorMarker() {
    this.colorEvent.emit({ value: this.colorMarker });
  }

  onSelectedColor(detail: SelectedColorDetail) {
    this.setSelectedColorDetail(detail);
  }

  onHueValue(color: HueEvent) {
    this.colorArea = this.getColorArea(color.value);
    this.colorMarker = this.getColorMarker(color.value);
  }

  convertColorType(type: string, color: string) {
    switch(type) {
      case 'RGB': return colord(color).toRgbString();
      case 'HSL': return colord(color).toHslString();
      default: return colord(color).toHex();
    }
  }

  getHSVADefault() {
    const hsva = {
      h: 0,
      s: 100,
      v: 100,
      a: 1
    };
    
    return hsva;
  }

  getColorArea(value: number | string): string {
    const hsva = this.getHSVADefault();

    if (typeof(value) === 'number') {
      const hue = value;
      hsva.h = hue;
      return colord(hsva).toHex();
    } 

    const hue = colord(value).hue();
    hsva.h = hue;
    return colord(hsva).toHex();
  }

  getMarkerPosition() {
    const { width, height } = this.colorAreaDetail.colorAreaDims;
    const hsva = colord(this.colorMarker).toHsv();

    const x = width * hsva.s / 100;
    const y = height - (height * hsva.v / 100);
    
    return { x, y };
  }

  calcPositionMarker(hsva: HsvaColor) {
    const { width, height } = this.colorAreaDetail.colorAreaDims;
    const radius = 0;
    
    return calcPositionPoint(hsva, { width, height, radius });
  }

  getColorMarker(data?: SelectedColorDetail | number) {
    if (typeof(data) !== 'number') {
      if (data) {
        const { color } = data;
    
        return color.hex;
      }
  
      return this.colorMarker;
    } else if (typeof(data) === 'number') {
      const { colorAreaDims, pos } = this.colorAreaDetail;
      const { width, height } = colorAreaDims;

      const hue = data;

      const { x, y } = pos;
      
      const newHsva = convertToHSVA(x, y, { hue, width, height });
      
      return colord(newHsva).toHex();
    }

    return this.colorMarker;
  }

  init(detail: SelectedColorDetail) {
    detail.color.hex = this.colorMarker;
    this.colorAreaDetail = detail;
  }

  setSelectedColorDetail(data: SelectedColorDetail) {
    this.handlerPos = Object.assign({}, data.pos);
    this.colorAreaDetail = data;
    this.colorMarker = this.getColorMarker(data);    
  }

  newSelectedColorDetail(color: string) {
    const newColorAreaDetail = JSON.parse(JSON.stringify(this.colorAreaDetail)) as SelectedColorDetail;
    
    newColorAreaDetail.color = {
      rgb: colord(color).toRgb(),
      hsl: colord(color).toHsl(),
      hex: colord(color).toHex()
    };

    const hsva = colord(color).toHsv();
    
    const newPos = this.calcPositionMarker(hsva);
    
    newColorAreaDetail.pos = newPos;

    return newColorAreaDetail;
  }

  handlerEyeDropper({ detail }: { detail: { sRGBHex: string } }) {
    const { sRGBHex } = detail;
    
    const newColorAreaDetail = this.newSelectedColorDetail(sRGBHex);
    
    this.setSelectedColorDetail(newColorAreaDetail);
    
    this.colorArea = this.getColorArea(sRGBHex);
  }
}
