import { newSpecPage } from '@stencil/core/testing';
import { CpcEyeDropper } from '../cpc-eye-dropper';

describe('cpc-eye-dropper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcEyeDropper],
      html: `<cpc-eye-dropper></cpc-eye-dropper>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-eye-dropper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-eye-dropper>
    `);
  });
});
