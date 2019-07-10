import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  check: false,

  didUpdateAttrs() {
    this._super(...arguments);
    console.log('this is the state of checked...', this.check);
  },

  actions: {
    change() {
      get(this, 'didChange')();
    }
  }
});
