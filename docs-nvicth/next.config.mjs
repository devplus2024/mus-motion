const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      require("rehype-slug"),
      require("rehype-autolink-headings"),
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
