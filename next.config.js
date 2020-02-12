const withSass = require('@zeit/next-sass');
const sitemap = require('nextjs-sitemap-generator');

// create sitemap.xml inside the out directory
sitemap({
  baseUrl: '<your_website_base_url>',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'out/'
});

// sass configure
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },

  // yarn run export
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  }
});

