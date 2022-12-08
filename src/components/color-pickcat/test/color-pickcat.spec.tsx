import { newSpecPage } from '@stencil/core/testing';
import { ColorPickcat} from '../color-pickcat';

describe('color-pickcat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColorPickcat],
      html: `<color-pickcat></color-pickcat>`,
    });
    expect(page.root).toEqualHtml(`
      <color-pickcat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </color-pickcat>
    `);
  });
});
