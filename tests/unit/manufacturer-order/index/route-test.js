import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | manufacturer-order/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:manufacturer-order/index');
    assert.ok(route);
  });
});
