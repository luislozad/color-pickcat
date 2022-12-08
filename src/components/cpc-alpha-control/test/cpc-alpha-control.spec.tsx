import { newSpecPage } from '@stencil/core/testing';
import { CpcAlphaControl } from '../cpc-alpha-control';

describe('cpc-alpha-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcAlphaControl],
      html: `<cpc-alpha-control></cpc-alpha-control>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-alpha-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-alpha-control>
    `);
  });
});
