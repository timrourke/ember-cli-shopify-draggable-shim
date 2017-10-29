# ember-cli-shopify-draggable-shim

[![CircleCI](https://circleci.com/gh/timrourke/ember-cli-shopify-draggable-shim.svg?style=svg)](https://circleci.com/gh/timrourke/ember-cli-shopify-draggable-shim)

An ember-cli shim for working with Shopify's drag-and-drop library [draggable](https://github.com/shopify/draggable)

## Using this addon in your Ember application

From the root of your Ember application, run this command from the command line:

`ember install ember-cli-shopify-draggable-shim`

To use Shopify's Draggable library in your application, import it and use the
classes as usual:

```javascript
import Component from '@ember/component';

import ShopifyDraggable from '@shopify/draggable';

const { Draggable } = ShopifyDraggable;

export default Component.extend({
	didRender() {
		this._super(...arguments);

		this.set('draggable', new Draggable(
			this.$('ul').toArray(),
			{ draggable: 'li' }
		));
	}
});
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-shopify-draggable-shim`
* `yarn install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
