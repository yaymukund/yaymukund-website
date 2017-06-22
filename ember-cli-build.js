'use strict';

const path = require('path');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const MergeTrees = require('broccoli-merge-trees');
const BroccoliImageResize = require('broccoli-image-resize');
const stew = require('broccoli-stew');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
    fingerprint: {
      exclude: ['assets/images/**/*']
    },

    outputPaths: {
      app: {
        js: 'assets/app.js',
        css: 'assets/app.css'
      }
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
      large: [null, 500],
      th: [100, 100]
    },
  });

  thumbnails = stew.mv(thumbnails, config.artDir);
  app = new MergeTrees([app, thumbnails], { overwrite: true });

  return app;
};
