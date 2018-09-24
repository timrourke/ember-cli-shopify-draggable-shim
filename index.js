/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-cli-shopify-draggable',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/draggable.bundle.js');
    this.import('vendor/shims/shopify-draggable.js');
  },

  treeForVendor(vendorTree) {
    var draggablePath = path.dirname(require.resolve('@shopify/draggable/lib/draggable.bundle.js'));
    var draggableTree = new Funnel(draggablePath, {
      files: ['draggable.bundle.js']
    });
    var fastbootSafeDraggableTree = map(draggableTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new MergeTrees([vendorTree, fastbootSafeDraggableTree]);
  },
};
