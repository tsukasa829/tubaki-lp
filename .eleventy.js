module.exports = function(eleventyConfig) {
  // 静的ファイルのコピー
  eleventyConfig.addPassthroughCopy("sample");
  
  // Showcaseファイルは別URLで保持
  eleventyConfig.addPassthroughCopy({
    "Showcase - Personal Portfolio One Page Bulma Theme.html": "showcase.html"
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
