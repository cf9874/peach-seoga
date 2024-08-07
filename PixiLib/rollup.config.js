import browsersync from "rollup-plugin-browsersync"
// import html from "rollup-plugin-generate-html-template"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import image from "@rollup/plugin-image"
// import cssimport from "postcss-import"
// import autoprefixer from "autoprefixer"
import replace from "rollup-plugin-replace"
import { terser } from "rollup-plugin-terser"
import nodent from "rollup-plugin-nodent"
import buble from "@rollup/plugin-buble"
import rolllupJson from "rollup-plugin-json"

const DISTFOLDER = process.env.NODE_ENV === "production" ? "dist" : "build"
const FILENAME = process.env.NODE_ENV === "production" ? "bundle.js" : "lib.js"

export default {
  input: "src/index.js",
  output: {
    name: "peach",
    file: DISTFOLDER + "/" + FILENAME,
    format: "umd",
  },
  plugins: [
    process.env.NODE_ENV !== "production" &&
      browsersync({
        server: "build",
        port: 8000,
      }),
    nodent({ promises: true, noRuntime: true }),
    image(),
    buble({
      transforms: { dangerousForOf: true, dangerousTaggedTemplateString: true },
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    process.env.NODE_ENV === "production" && terser(),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    commonjs({
      include: ["node_modules/**", "node_modules/@pixi/polyfill/lib/polyfill.es.js"],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    rolllupJson(),
  ],
  sourceMap: false,
  external: ["moment"],
}
