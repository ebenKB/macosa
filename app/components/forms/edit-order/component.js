import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  changesetObj: null,
  actions: {
    editOrder() {

    },
    cancel() {
      get(this, 'cancel')();
    },
    validate() {

    }
  }
});
