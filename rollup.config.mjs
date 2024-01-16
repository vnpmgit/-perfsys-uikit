import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import packageJson from './package.json' assert { type: 'json' };
import sass from 'sass';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      svgr({ icon: true }),
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      typescript({
        exclude: [
          // Exclude test files
          /\.test.(js|jsx|ts|tsx)$/,
          // Exclude story files
          /\.stories.(js|jsx|ts|tsx|mdx)$/,
        ],
        tsconfig: './tsconfig.json'
      }),
      commonjs(),
      postcss({
        plugins: [autoprefixer()],
      }),
      copy({
        targets: [
          { src: 'src/assets/fonts/*', dest: 'dist/fonts' },
        ],
        verbose: true,
      }),
      terser(),
    ],
  },
  {
    // SCSS compilation
    input: 'src/styles/main.scss',
    output: {
      file: 'dist/styles.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        use: [
          ['sass', { sass }]
        ],
        plugins: [autoprefixer()]
      }),
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, 'fonts'],
  },
];
