const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addCollection("articles", (collectionApi) => {
    return collectionApi.getFilteredByGlob("articles/*.md").sort((a, b) => b.date - a.date);
  });
  return {
    pathPrefix: "/mosheer-website/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
