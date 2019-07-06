import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | invitation/confirm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:invitation/confirm');
    assert.ok(route);
  });
});
