import { Component, Host, h, Prop, State, Element, Event, EventEmitter, Watch } from '@stencil/core';
import { calcPositionPoint, convertToHSVA, isAlphaValid } from '../../utils';
import { colord, HsvaColor } from 'colord';
import { Position, SelectedColorDetail } from '../cpc-color-area/cpc-color-area';
import { HueEvent } from '../cpc-hue-control/cpc-hue-control';
import { AlphaEvent } from '../cpc-alpha-control/cpc-alpha-control';
import { InputEvent } from '../cpc-input-v1/cpc-input-v1';

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
  @Event({ eventName: 'alpha' }) alphaEvent: EventEmitter<AlphaEvent>;
  
  private colorTypes: string[] = ['RGB', 'HSL', 'HEX'];

  render() {
    return (
      <Host class='clr-picker'>

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
              onAlphaValue={({ detail }) => this.onAlphaValue(detail)} 
              color={this.colorMarker}>
            </cpc-alpha-control>

            <cpc-input-color
              onInputChange={({ detail }) => this.onInputColorChange(detail)}
              value={this.convertColorType(this.colorType, this.colorMarker)} 
              colors={this.colorTypes} 
              onSelectedColor={({ detail }) => this.colorType = detail.currentColor}>
            </cpc-input-color>
          </div>

          <div class={'ml-2 flex flex-col w-16 justify-between'}>
            <cpc-eye-dropper onGetColor={(e) => this.handlerEyeDropper(e)} class={'mt-2'}></cpc-eye-dropper>

            <cpc-input-alpha 
              value={this.alphaValue}
              onInputAlphaChange={({ detail }) => this.onInputAlphaChange(detail)}
              onAlphaValue={({ detail }) => this.onAlphaValue(detail)}>
            </cpc-input-alpha>
          </div>
        </div>

      </Host>
    );
  }

  @Watch('colorMarker')
  onStateColorMarker() {
    this.colorEvent.emit({ value: this.colorMarker });
  }

  @Watch('alphaValue')
  onStateAlphaValue() {
    this.alphaEvent.emit({ value: this.alphaValue });
  }

  onInputAlphaChange(detail: InputEvent) {
    const alphaValue = Number(detail.change.value.replace('%', ''));
    
    if (!isNaN(alphaValue) && alphaValue !== this.alphaValue) {
      if (isAlphaValid(alphaValue, { min: 0, max: 100 })) {
        this.alphaValue = alphaValue;
      }
    }
  }

  // Se activa cuando el usuario tipea manualmente un color
  // Valida que sea un color real y actualiza la UI
  // Si el color tipeado contiene un canal alpha, es separado para solo mostrar el color sin ese canal
  // esto lo hago para tener la UI limpia visualmente
  onInputColorChange(detail: InputEvent) {
    const newColor = detail.change.value;
    if (newColor !== this.colorMarker) {
      if (colord(newColor).isValid()) {
        if (colord(newColor).alpha() === 1) {
          this.updateUIColor(newColor);
        } else {
          const { r, g, b, a } = colord(newColor).toRgb();
          const newColorWithoutAlpha = colord({ r, g, b }).toHex();
          this.updateUIColor(newColorWithoutAlpha);
          this.alphaValue = a * 100;
        }
      }
    }
  }

  onAlphaValue(alpha: AlphaEvent) {
    this.alphaValue = alpha.value;
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
  
  updateUIColor(color: string) {
    const newColorAreaDetail = this.newSelectedColorDetail(color);
    
    this.setSelectedColorDetail(newColorAreaDetail);
    
    this.colorArea = this.getColorArea(color);    
  }

  handlerEyeDropper({ detail }: { detail: { sRGBHex: string } }) {
    const { sRGBHex } = detail;
    
    this.updateUIColor(sRGBHex);
  }
}
