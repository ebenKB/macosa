import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | supplier-order/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:supplier-order/index');
    assert.ok(controller);
  });
});
