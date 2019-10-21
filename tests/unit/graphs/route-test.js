import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | graphs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:graphs');
    assert.ok(route);
  });
});
