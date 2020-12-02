import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.mjs',
  output: {
    dir: 'output',
    format: 'esm',
  },
  plugins: [nodeResolve(), commonjs()],
};
