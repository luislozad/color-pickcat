import { newSpecPage } from '@stencil/core/testing';
import { CpcDivisorV1 } from '../cpc-divisor-v1';

describe('cpc-divisor-v1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CpcDivisorV1],
      html: `<cpc-divisor-v1></cpc-divisor-v1>`,
    });
    expect(page.root).toEqualHtml(`
      <cpc-divisor-v1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cpc-divisor-v1>
    `);
  });
});
