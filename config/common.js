import react from '@vitejs/plugin-react';

export default {
  root: './',
  base: './',
  define: {},
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
  },
};
