import { newSpecPage } from '@stencil/core/testing';
import { CpcContainerV3 } from '../cpc-container-v3';

describe('cpc-container-v3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcContainerV3],
      html: `<cpc-container-v3></cpc-container-v3>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-container-v3>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-container-v3>
    `);
  });
});
