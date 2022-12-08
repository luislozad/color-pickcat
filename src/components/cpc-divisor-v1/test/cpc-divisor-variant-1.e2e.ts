import { newE2EPage } from '@stencil/core/testing';

describe('cpc-divisor-v1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cpc-divisor-v1></cpc-divisor-v1>');

    const element = await page.find('cpc-divisor-v1');
    expect(element).toHaveClass('hydrated');
  });
});
