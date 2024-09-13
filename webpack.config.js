const path = require("path");

module.exports = {
  // Other Webpack configurations...

  module: {
    rules: [
      {
        test: /\.mdx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          "@mdx-js/loader",
        ],
      },
      // Other rules...
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".mdx"],
  },
};
