import { newSpecPage } from '@stencil/core/testing';
import { CpcInputColor } from '../cpc-input-color';

describe('cpc-input-color', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcInputColor],
      html: `<cpc-input-color></cpc-input-color>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-input-color>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-input-color>
    `);
  });
});
