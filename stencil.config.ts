import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'color-pickcat',
  plugins: [
    inlineSvg(),
    tailwind({
      tailwindCssPath: './src/assets/styles.css',
      postcss: {
        plugins: [
          require('tailwindcss')          
        ]
      },
    }),
    tailwindHMR(),
  ],  
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
