import path from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import ViteWebp from 'vite-plugin-webp-generator';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      port: 3000
    },
    build: {
        rollupOptions: {
            input: {
                main: path.join(__dirname, 'index.html'),
            },
          output: {
            assetFileNames: (assetInfo: any) => {
              var info = assetInfo.name.split(".");
              var extType = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "img";
              } else if (/woff|woff2/.test(extType)) {
                extType = "fonts";
              }
              return `static/${extType}/[name]-[hash][extname]`;
            },
            chunkFileNames: "static/js/[name]-[hash].js",
            entryFileNames: "static/js/[name]-[hash].js",
          },
        },
      outDir: './dist'
    },
  plugins: [
    ViteWebp.default({
      extensions: ["png", "jpg"]
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 70,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70,
      },
    }),
    ViteSvgSpriteWrapper({
      icons: 'src/img/icons/*.svg',
      outputDir: 'public/img',
    }),
  ],
})