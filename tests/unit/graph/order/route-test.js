import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | graph/order', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:graph/order');
    assert.ok(route);
  });
});
