import { newSpecPage } from '@stencil/core/testing';
import { CpcColorArea } from '../cpc-color-area';

describe('cpc-color-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcColorArea],
      html: `<cpc-color-area></cpc-color-area>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-color-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-color-area>
    `);
  });
});
