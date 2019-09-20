import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | notification/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:notification/index');
    assert.ok(route);
  });
});
