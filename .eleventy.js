module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style/fonts");

  return {
    dir: {
      input: "src",
    },
  };
};
