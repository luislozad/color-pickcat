import { newE2EPage } from '@stencil/core/testing';

describe('cpc-input-color', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-input-color></cpc-input-color>');

    const element = await page.find('cpc-input-color');
    expect(element).toHaveClass('hydrated');
  });
});
