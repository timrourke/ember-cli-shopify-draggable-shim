import { test, module } from 'qunit';
import ShopifyDraggable from '@shopify/draggable';

const {
  BaseEvent,
  Draggable,
  Droppable,
  Sortable,
  Swappable,
} = ShopifyDraggable;

module('Unit | Draggable exports');

test('ShopifyDraggable exports', function(assert) {
  assert.ok(ShopifyDraggable, 'Draggable exports an object');
});

test('Draggable class exports', function(assert) {
  assert.equal(typeof Draggable, 'function');
});

test('Draggable() instance of Draggable', function(assert) {
  const instance = new Draggable();

  assert.ok(instance instanceof Draggable);
});

test('Droppable class exports', function(assert) {
  assert.equal(typeof Droppable, 'function');
});

test('Droppable() instance of Droppable', function(assert) {
  const instance = new Droppable();

  assert.ok(instance instanceof Droppable);
});

test('BaseEvent class exports', function(assert) {
  assert.equal(typeof BaseEvent, 'function');
});

test('BaseEvent() instance of BaseEvent', function(assert) {
  const instance = new BaseEvent();

  assert.ok(instance instanceof BaseEvent);
});

test('Sortable class exports', function(assert) {
  assert.equal(typeof Sortable, 'function');
});

test('Sortable() instance of Sortable', function(assert) {
  const instance = new Sortable();

  assert.ok(instance instanceof Sortable);
});

test('Swappable class exports', function(assert) {
  assert.equal(typeof Swappable, 'function');
});

test('Swappable() instance of Swappable', function(assert) {
  const instance = new Swappable();

  assert.ok(instance instanceof Swappable);
});
