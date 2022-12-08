import { newSpecPage } from '@stencil/core/testing';
import { CpcMenuV1 } from '../cpc-menu-v1';

describe('cpc-menu-v1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcMenuV1],
      html: `<cpc-menu-v1></cpc-menu-v1>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-menu-v1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-menu-v1>
    `);
  });
});
