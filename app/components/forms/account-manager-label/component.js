import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  account: null,
  actions: {
    perform() {
      console.log('we want to');
    },

    selectAccount() {
      get(this, 'didSelectAccount')();
    }
  }
});
