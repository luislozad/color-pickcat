import { newSpecPage } from '@stencil/core/testing';
import { CpcInputNumberV2 } from '../cpc-input-number-v2';

describe('cpc-input-number-v2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcInputNumberV2],
      html: `<cpc-input-number-v2></cpc-input-number-v2>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-input-number-v2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-input-number-v2>
    `);
  });
});
