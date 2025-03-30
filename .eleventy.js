module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addShortcode("video", function(url) {
    return `<div class="iframe-container">
      <iframe src="${url}" frameborder="0" allowfullscreen></iframe>
    </div>`;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
