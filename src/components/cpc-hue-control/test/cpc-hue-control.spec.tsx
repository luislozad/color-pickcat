import { newSpecPage } from '@stencil/core/testing';
import { CpcHueControl } from '../cpc-hue-control';

describe('cpc-hue-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcHueControl],
      html: `<cpc-hue-control></cpc-hue-control>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-hue-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-hue-control>
    `);
  });
});
