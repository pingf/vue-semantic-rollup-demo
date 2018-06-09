

import copy from 'rollup-copy-plugin';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble';
// import eslint from 'rollup-plugin-eslint';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';
import commonjs from "rollup-plugin-commonjs";


const external = Object.keys(pkg.dependencies);
const extensions = ['.js', '.vue'];
const isProduction = !process.env.ROLLUP_WATCH;
const globals = { vue: 'Vue' , 'semantic-ui-vue': 'SemanticUIVue', vuex: 'Vuex'};

const lintOpts = {
  extensions,
  exclude: ['**/*.json'],
  cache: true,
  throwOnError: true
};

const plugins = [
        copy({
            "html/index.html": "dist/index.html",
            "node_modules/vue/dist/vue.min.js": "dist/vue.js",
            "node_modules/semantic-ui-vue/dist/umd/semantic-ui-vue.min.js": "dist/sui.js",
            "node_modules/vuex/dist/vuex.js": "dist/vuex.js"
        }),
    commonjs(),
  resolve({browser: true}),
  // eslint(lintOpts),
  bundleSize(),
    css({ output: 'dist/bundle.css' }),
  vue({
    compileTemplate: true,
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    css: false,
  }),
  buble()
];

export default {
  external,
  plugins,
  input: 'src/entry.js',
  output: {
    globals,
    file: 'dist/bundle.js',
    format: 'umd'
      // format: 'iife'
  },
};




