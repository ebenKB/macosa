import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  check: false,

  didUpdateAttrs() {
    this._super(...arguments);
  },

  actions: {
    change() {
      get(this, 'perform')();
    }
  }
});
