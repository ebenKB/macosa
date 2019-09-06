import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  canShowModal: false,
  isPerforming: false,
  confirmTitle: 'Continue',
  message: 'Are you sure you want to continue ?',
  actions: {
    perform() {
      get(this, 'perform')();
    },
    decline() {
      set(this, 'canShowModal',false);
    }
  }
});