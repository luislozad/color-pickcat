import { newSpecPage } from '@stencil/core/testing';
import { CpcInputAlpha } from '../cpc-input-alpha';

describe('cpc-input-alpha', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcInputAlpha],
      html: `<cpc-input-alpha></cpc-input-alpha>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-input-alpha>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-input-alpha>
    `);
  });
});
