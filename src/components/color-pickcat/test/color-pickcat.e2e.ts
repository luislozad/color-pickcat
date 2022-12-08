import { newE2EPage } from '@stencil/core/testing';

describe('color-pickcat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<color-pickcat></color-pickcat>');

    const element = await page.find('color-pickcat');
    expect(element).toHaveClass('hydrated');
  });
});
