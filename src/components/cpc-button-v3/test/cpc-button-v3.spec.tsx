import { newSpecPage } from '@stencil/core/testing';
import { CpcButtonV3 } from '../cpc-button-v3';

describe('cpc-button-v3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcButtonV3],
      html: `<cpc-button-v3></cpc-button-v3>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-button-v3>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-button-v3>
    `);
  });
});
