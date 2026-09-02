import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),
    ViteImageOptimizer({
      webp: { quality: 80 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      gif: { effort: 7 }
    })
  ],
  assetsInclude: ['**/*.lottie']
})
