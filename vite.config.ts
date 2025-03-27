import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'AddToCartButtonWidget',
      fileName: 'index',
      formats: ['es']
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        compact: true,
        inlineDynamicImports: false,
        format: 'es',
        minifyInternalExports: true,
        // manualChunks: { 'ecom': ['@haus-tech/ecom-components'] },
        entryFileNames: '[name]-[hash].js', // currently does not work for the legacy bundle
        assetFileNames: '[name]-[hash].[ext]', // currently does not work for images
        chunkFileNames: '[name]-[hash].js',
      },
    }
  },
  
  plugins: [react()]
})
