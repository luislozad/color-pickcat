import { newE2EPage } from '@stencil/core/testing';

describe('cpc-button-v3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-button-v3></cpc-button-v3>');

    const element = await page.find('cpc-button-v3');
    expect(element).toHaveClass('hydrated');
  });
});
