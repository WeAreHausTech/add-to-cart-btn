import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = __dirname;

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(root, 'src/index.ts'),
      name: 'HausCoreWidgets',
      fileName: () => 'index.js',
      formats: ['es','umd']
    },
    outDir: path.resolve(root, 'dist'),
    rollupOptions: {
      external: ['react','react-dom', '@types/react'],
      output: { globals: { react:'React','react-dom':'ReactDOM' } }
    }
  },
})