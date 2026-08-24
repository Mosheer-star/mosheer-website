const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  return {
    pathPrefix: "/mosheer-website/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
