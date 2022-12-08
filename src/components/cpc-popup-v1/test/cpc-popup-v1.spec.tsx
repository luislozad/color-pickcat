import { newSpecPage } from '@stencil/core/testing';
import { CpcPopupV1 } from '../cpc-popup-v1';

describe('cpc-popup-v1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcPopupV1],
      html: `<cpc-popup-v1></cpc-popup-v1>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-popup-v1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-popup-v1>
    `);
  });
});
