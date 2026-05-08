import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';


export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
        service: resolve(__dirname, './src/service/index.html'),
        contact: resolve(__dirname, './src/contact/index.html'),
      },
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/style.[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      },
    },
  },
  css: {
    devSourcemap: true,
    // preprocessorOptions: {
    //   scss: {
    //     api: 'modern-compiler'
    //   }
    // }
  },
  plugins: [
    ViteEjsPlugin(),
  ],
});
