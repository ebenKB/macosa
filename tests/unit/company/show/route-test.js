import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | company/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:company/show');
    assert.ok(route);
  });
});
