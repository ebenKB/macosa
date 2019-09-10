import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | account-manager/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:account-manager/new');
    assert.ok(route);
  });
});
