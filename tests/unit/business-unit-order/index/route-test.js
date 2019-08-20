import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | business-unit-order/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:business-unit-order/index');
    assert.ok(route);
  });
});
