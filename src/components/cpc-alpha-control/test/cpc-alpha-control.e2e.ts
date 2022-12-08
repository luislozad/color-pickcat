import { newE2EPage } from '@stencil/core/testing';

describe('cpc-alpha-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-alpha-control></cpc-alpha-control>');

    const element = await page.find('cpc-alpha-control');
    expect(element).toHaveClass('hydrated');
  });
});
