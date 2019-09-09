import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | type/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:type/index');
    assert.ok(route);
  });
});
