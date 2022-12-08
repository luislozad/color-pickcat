import { newE2EPage } from '@stencil/core/testing';

describe('cpc-color-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-color-area></cpc-color-area>');

    const element = await page.find('cpc-color-area');
    expect(element).toHaveClass('hydrated');
  });
});
