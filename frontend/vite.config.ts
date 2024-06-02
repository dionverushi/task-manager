import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.tsx',
          filename: 'index.html',
          template: 'public/index.html',
          injectOptions: {
            data: {
              title: 'index',
              injectScript: `<script src="./inject.js"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  id: 'tag1',
                },
              },
            ],
          },
        },
      ],
    }),
  ],
  base: '/', // Specify the base URL for your application
  build: {
    outDir: 'dist', // Customize the output directory
    minify: 'terser', // Minify JavaScript output using Terser
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.* calls in production build
      },
    },
  },
});
