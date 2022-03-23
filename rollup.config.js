import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

const rollupBabelPlugin = babel({
  babelHelpers: 'bundled',
  exclude: 'node_modules/**',
  babelrc: false,
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }
    ]
  ]
});
const server = {
  input: 'src/server.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [rollupBabelPlugin],
  external: ['fs', 'http', ...Object.keys(pkg.dependencies)]
};
const client = {
  input: 'src/client.js',
  output: {
    dir: 'dist',
    format: 'iife',
    globals: {
      preact: 'preact'
    }
  },
  plugins: [rollupBabelPlugin],
  external: ['preact']
};
export default [server, client];
