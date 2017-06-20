'use strict';

const path = require('path');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const MergeTrees = require('broccoli-merge-trees');
const BroccoliImageResize = require('broccoli-image-resize');
const stew = require('broccoli-stew');
const json = require('rollup-plugin-json');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
    rollup: {
      plugins: [
        json({
          include: 'src/**/*.json'
        })
      ]
    }
  });

  app = app.toTree();

  // Generate thumbnails
  let config = defaults.project.config(defaults.project.env);
  let artSrcDir = path.join('public', config.artDir);

  let thumbnails = new BroccoliImageResize([artSrcDir], {
    withoutEnlargement: true,
    sizes: {
      default: [1080],
      th: [100, 100]
    },
  });

  thumbnails = stew.mv(thumbnails, config.artDir);
  app = new MergeTrees([app, thumbnails], { overwrite: true });

  return app;
};
