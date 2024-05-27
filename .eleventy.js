const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style/fonts");
  eleventyConfig.addPassthroughCopy("src/icons");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
    },
    pathPrefix: "/",
  };
};
