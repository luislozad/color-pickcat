import { newE2EPage } from '@stencil/core/testing';

describe('cpc-eye-dropper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-eye-dropper></cpc-eye-dropper>');

    const element = await page.find('cpc-eye-dropper');
    expect(element).toHaveClass('hydrated');
  });
});
