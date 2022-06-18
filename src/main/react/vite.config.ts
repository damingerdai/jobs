import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
	build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
	server: {
		port: 3000,
		proxy: {
			'/api': 'http://127.0.0.1:8443',
		}
	}
})
