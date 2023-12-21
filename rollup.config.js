import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-import-css';

export default {
  // entry point
  input: 'src/index.ts',

  // output config
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    exports: 'auto',
    preserveModules: true,
  },

  // plugins
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ['src/**/*.stories.tsx', 'src/**/*.json', 'src/**/*.md'],
    }),
    terser(),
    json({ compact: true }),
    css(),
  ],
};
