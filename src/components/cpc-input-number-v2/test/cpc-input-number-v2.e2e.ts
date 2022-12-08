import { newE2EPage } from '@stencil/core/testing';

describe('cpc-input-number-v2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-input-number-v2></cpc-input-number-v2>');

    const element = await page.find('cpc-input-number-v2');
    expect(element).toHaveClass('hydrated');
  });
});
