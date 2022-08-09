import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
	},
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
