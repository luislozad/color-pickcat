import { newE2EPage } from '@stencil/core/testing';

describe('cpc-hue-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-hue-control></cpc-hue-control>');

    const element = await page.find('cpc-hue-control');
    expect(element).toHaveClass('hydrated');
  });
});
