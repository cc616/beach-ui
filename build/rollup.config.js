import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: '../components/index.ts',
  output: [
    {
      file: '../dist/beach-ui.js',
      format: 'umd',
      name: 'beach-ui',
      globals: {
        'react': 'React',
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx']
    }),
    babel({
      presets: [
        "@babel/preset-env",
        "@babel/preset-flow",
        "@babel/preset-typescript",
        "@babel/preset-react"
      ],
      extensions: ['.ts', '.tsx'],
      include: "../components/**",
      runtimeHelpers: true
    }),
    commonjs({
      sourceMap: false
    }),
    terser(),
  ]
}
