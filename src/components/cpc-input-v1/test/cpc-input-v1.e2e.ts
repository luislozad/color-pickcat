import { newE2EPage } from '@stencil/core/testing';

describe('cpc-input-v1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-input-v1></cpc-input-v1>');

    const element = await page.find('cpc-input-v1');
    expect(element).toHaveClass('hydrated');
  });
});
