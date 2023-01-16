import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  splitting: true,
  format: 'esm',
  outDir: 'dist',
  entry: [
    'src/index.ts',
  ],
});
