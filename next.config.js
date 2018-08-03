const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

// module.exports = withImages();
module.exports = withPlugins([
    [withImages, {
      /* config for next-optimized-images */
    }],
   
    // your other plugins here
  ]);