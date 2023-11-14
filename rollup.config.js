import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

//NEW
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'


export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: "dist/cjs/index.js",
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      typescript(),
      peerDepsExternal(),

      resolve(),
      commonjs(),

      // NEW
      terser(),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
]