import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index-wix.js', // our custom entry file
  output: {
    file: 'dist/bundle.umd.js', // bundled output file
    format: 'umd',
    name: 'MyGaugeApp', // the global variable name for your bundle
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-gauge-component': 'ReactGaugeComponent'
    }
  },
  external: ['react', 'react-dom', 'react-gauge-component'], // these are provided externally
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};
