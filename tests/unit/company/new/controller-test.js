import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | company/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:company/new');
    assert.ok(controller);
  });
});
