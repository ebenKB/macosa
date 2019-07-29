import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    perform() {
      get(this, 'perform')();
    },

    cancel() {
      get(this, 'cancel')();
    },

    validate() {

    }
  }
});
