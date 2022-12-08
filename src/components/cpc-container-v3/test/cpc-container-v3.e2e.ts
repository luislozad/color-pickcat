import { newE2EPage } from '@stencil/core/testing';

describe('cpc-container-v3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-container-v3></cpc-container-v3>');

    const element = await page.find('cpc-container-v3');
    expect(element).toHaveClass('hydrated');
  });
});
