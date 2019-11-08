import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | graphs/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:graphs/index');
    assert.ok(route);
  });
});
