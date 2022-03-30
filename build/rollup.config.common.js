import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const fs = require('fs');
const path = require('path');
const componentDir = '../components';

const moduleNames = fs.readdirSync(path.resolve(componentDir)).filter((i) => i !== 'index.ts' && i !==  'styles');

const moduleMap = moduleNames.reduce((prev, name) => {
  prev[name] = `${componentDir}/${name}/index.tsx`;

  return prev;
}, {});

export default {
  input: {
    index: '../components/index.ts',
    ...moduleMap
  },
  output: [
    {
      dir: '../es',
      entryFileNames: ({ exports }) => exports.length > 1 ? 'index.js' : '[name]/index.js',
      format: 'es',
      exports: 'named',
      globals: {
        'react': 'React',
      },
    },
    {
      dir: '../lib',
      entryFileNames: ({ exports }) => exports.length > 1 ? 'index.js' : '[name]/index.js',
      format: 'cjs',
      exports: 'named',
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
  ]
}
