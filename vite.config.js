import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html')
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});