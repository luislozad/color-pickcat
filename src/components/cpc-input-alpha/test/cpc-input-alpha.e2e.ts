import { newE2EPage } from '@stencil/core/testing';

describe('cpc-input-alpha', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-input-alpha></cpc-input-alpha>');

    const element = await page.find('cpc-input-alpha');
    expect(element).toHaveClass('hydrated');
  });
});
