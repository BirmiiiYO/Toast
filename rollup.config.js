import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import svgr from '@svgr/rollup'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    svgr(),
    babel({
      exclude: 'node_modules/**',
    }),
    peerDepsExternal(),
    commonjs(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  external: ["styled-components"],
}
