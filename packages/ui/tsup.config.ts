import { Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  splitting: true,
  entry: ['src/**/*.tsx'],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  ...options,
}));
