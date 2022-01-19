import plugins from "./plugins";

export default {
  root: './',
  base: './',
  define: {},
  server: {
    port: 8080,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
  },
  plugins,
};
