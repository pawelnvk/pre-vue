import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import image from 'rollup-plugin-img';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss'
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/main.js',
  plugins: [
    vue(),
    image({ limit: 2000000 }),
    resolve(),
    commonjs(),
    scss({ output: false }),
    babel(),
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'Prevue',
  },
  external: ['vue-highlightj'],
};
