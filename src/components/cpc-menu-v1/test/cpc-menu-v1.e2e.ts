import { newE2EPage } from '@stencil/core/testing';

describe('cpc-menu-v1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-menu-v1></cpc-menu-v1>');

    const element = await page.find('cpc-menu-v1');
    expect(element).toHaveClass('hydrated');
  });
});
