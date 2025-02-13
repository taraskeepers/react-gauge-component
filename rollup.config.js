import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index-wix.js',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'MyGaugeApp',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
      // removed: 'react-gauge-component': 'ReactGaugeComponent'
    }
  },
  external: ['react', 'react-dom'], // removed 'react-gauge-component'
  plugins: [
    resolve({ extensions }),
    babel({
      babelHelpers: 'bundled',
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
};
