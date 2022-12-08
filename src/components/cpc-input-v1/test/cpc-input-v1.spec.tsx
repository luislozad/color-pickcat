import { newSpecPage } from '@stencil/core/testing';
import { CpcInputV1 } from '../cpc-input-v1';

describe('cpc-input-v1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcInputV1],
      html: `<cpc-input-v1></cpc-input-v1>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-input-v1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-input-v1>
    `);
  });
});
