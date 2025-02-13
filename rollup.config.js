import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index-wix.js',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'MyGaugeApp',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-gauge-component': 'ReactGaugeComponent'
    }
  },
  external: ['react', 'react-dom', 'react-gauge-component'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions, // Process files with these extensions
      include: ['src/**/*'], // Ensure Babel processes our source files
      exclude: 'node_modules/**'
    })
  ]
};
