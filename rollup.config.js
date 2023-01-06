import path from 'path'

import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup'
import alias from '@rollup/plugin-alias'

const projectRootDir = path.resolve(__dirname)

export default {
  input: 'src/index.ts',
  output: {
    name: 'index',
    file: 'lib/index.js',
    format: 'esm',
    globals: { react: 'React', 'react-dom': 'ReactDom' },
  },
  plugins: [
    image(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(
            projectRootDir,
            './src',
          ),
        },
      ],
    }),
    peerDepsExternal(),
    commonjs(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  external: ["styled-components"],
}
