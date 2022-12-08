import { newE2EPage } from '@stencil/core/testing';

describe('cpc-popup-variant-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-popup-variant-1></cpc-popup-variant-1>');

    const element = await page.find('cpc-popup-variant-1');
    expect(element).toHaveClass('hydrated');
  });
});
