import { Component, Host, h, Listen, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';
import { calcPositionPoint } from '../../utils';
import { colord, RgbaColor, HslColor, HsvaColor } from 'colord';

export type Position = {
  x: number;
  y: number;
}

export interface SelectedColorDetail {
  pos: Position;
  color: {
    rgb: RgbaColor;
    hsl: HslColor;
    hex: string;    
  };
  colorAreaDims: { 
    width: number; 
    height: number; 
    x: number; 
    y: number;
  }
}

@Component({
  tag: 'cpc-color-area',
  styleUrl: 'cpc-color-area.css',
  shadow: true,
})
export class CpcColorArea {
  @Prop({ mutable: true }) colorArea?: string = '#FF0000';
  @Prop({ mutable: true }) colorMarker?: string = '#FFFFFF';
  @Prop({ mutable: true }) handlerRadius?: number = 0;
  
  @Prop({ mutable: true }) alphaValue: number = 100;

  @Prop({ mutable: true }) handlerPos?: Position;

  @Element() ref: HTMLElement;

  @Event({ eventName: 'selectedColor' }) selectedColorEvent: EventEmitter<SelectedColorDetail>;
  @Event({ eventName: 'loadedComponent' }) loadedComponentEvent: EventEmitter<{ selectedColorDetail: SelectedColorDetail }>;

  private colorAreaDims = { width: 0, height: 0, x: 0, y: 0 };

  private offset = { x: 0, y: 0 };

  private loaded: boolean = false;

  private refMarker: HTMLElement;

  render() {
    return (
      <Host role='application'>
        <div ref={(ref) => this.refMarker = ref} tabindex='0'></div>
      </Host>
    );
  }

  updateColorAreaDims() {
    this.colorAreaDims = {
      width: this.ref.offsetWidth,
      height: this.ref.offsetHeight,     
      x: this.ref.offsetLeft + this.offset.x,
      y: this.ref.offsetTop + this.offset.y      
    };
  }

  updateColorArea() {
    const colorArea = this.getColorArea();

    this.ref.style.color = colorArea;
  }

  calcPositionMarker(hsv: HsvaColor) {
    const { width, height } = this.colorAreaDims;
    const radius = this.handlerRadius;
    
    return calcPositionPoint(hsv, { width, height, radius });
  }  

  updatePositionMarker() {
    const hsva = colord(this.colorMarker).toHsv();

    const { x, y } = this.handlerPos ? this.handlerPos : this.calcPositionMarker(hsva);

    this.setPositionMarker(x, y);
  }

  updateColorMarker() {
    this.refMarker.style.color = this.colorMarker;
  }

  init() {
    if (!this.loaded) {
      this.loaded = true;
      this.updateColorAreaDims();
      this.updateColorArea();
      this.updatePositionMarker();
      this.updateColorMarker();
    }
  }

  handlerMoveMarker = (e: MouseEvent & TouchEvent) => {
    this.updateColorAreaDims();
    this.moveMarker(e);
  };

  getColorArea() {
    const colorArea = this.colorArea;

    return colord(colorArea).toHex();
  }

  convertToHSVA(x: number, y: number) {
    const hueValue = colord(this.colorArea).hue()

    const hsva = {
      h: hueValue,
      s: x / this.colorAreaDims.width * 100,
      v: 100 - (y / this.colorAreaDims.height * 100),
      a: this.alphaValue / 100
    };
    
    return hsva;
  }

  selectedColorEmit(x: number, y: number) {
    const hsva = this.convertToHSVA(x, y);

    const color = {
      rgb: colord(hsva).toRgb(),
      hsl: colord(hsva).toHsl(),
      hex: colord(hsva).toHex(),
    };

    this.selectedColorEvent.emit({ color, pos: { x, y }, colorAreaDims: this.colorAreaDims })
  }

  getPositionMarker() {
    const { top, left } = window.getComputedStyle(this.refMarker);

    const x = Number(left.replace('px', ''));
    const y = Number(top.replace('px', ''));

    return { x, y };
  }

  @Watch('colorArea')
  handlerStateColorArea() {
    this.ref.style.color = this.colorArea;
  }

  @Watch('colorMarker')
  hanndlerStateColorMarker() {
    this.updatePositionMarker();
    this.updateColorMarker();
  }

  @Listen('mousedown')
  handleMouseDown() {
    document.addEventListener('mousemove', this.handlerMoveMarker);
  }

  @Listen('click')
  handleClick(e: MouseEvent & TouchEvent) {
    this.handlerMoveMarker(e);
  }

  @Watch('handlerPos')
  onHandlerPos() {
    this.updatePositionMarker();
  }

  getPointerPosition(event: MouseEvent & TouchEvent) {
    return {
      pageX: event.changedTouches ? event.changedTouches[0].pageX : event.pageX,
      pageY: event.changedTouches ? event.changedTouches[0].pageY : event.pageY
    };
  }

  setPositionMarker(x: number, y: number) {
    this.refMarker.style.left = `${x}px`;
    this.refMarker.style.top = `${y}px`;    
  }

  moveMarker(event: MouseEvent & TouchEvent) {
    const pointer = this.getPointerPosition(event);
    let x = pointer.pageX - this.colorAreaDims.x;
    let y = pointer.pageY - this.colorAreaDims.y;

    x = (x < 0) ? 0 : (x > this.colorAreaDims.width) ? this.colorAreaDims.width : x;
    y = (y < 0) ? 0 : (y > this.colorAreaDims.height) ? this.colorAreaDims.height : y;

    this.setPositionMarker(x, y);
  
    this.selectedColorEmit(x, y);

    // Prevent scrolling while dragging the marker
    event.preventDefault();
    event.stopPropagation();
  }

  getSelectedColorDetail() {
    const { x, y } = this.getPositionMarker();

    const hsva = this.convertToHSVA(x, y);

    const color = {
      rgb: colord(hsva).toRgb(),
      hsl: colord(hsva).toHsl(),
      hex: colord(hsva).toHex(),
    };

    const selectedColorDetail = {
      color,
      pos: { x, y },
      colorAreaDims: this.colorAreaDims,
    };

    return selectedColorDetail;
  }

  loadedComponentEventEmit() {
    const selectedColorDetail = this.getSelectedColorDetail();

    this.loadedComponentEvent.emit({ selectedColorDetail });
  }
  
  componentDidLoad() {
    this.loadedComponentEventEmit();

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', this.handlerMoveMarker)
    });
  }

  componentDidRender() {
    this.init();
  }
}
