import "@rollup/plugin-node-resolve";
import "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import terser from "rollup-plugin-terser";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.es,
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ],
};

export default config;
