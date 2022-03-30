module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-flow"
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/transform-modules-commonjs",
    "@babel/proposal-class-properties",
    "@babel/plugin-transform-runtime",
  ]
}
