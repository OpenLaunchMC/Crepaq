import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
//import html from "@rollup/plugin-html";
//import json from "@rollup/plugin-json";

export default {
  input: "./src/main.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    name: "crebit",
    sourcemao: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    terser(),
  ]
};
