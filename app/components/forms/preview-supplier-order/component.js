import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  canShowModal: false,
  title: 'Are you sure you want Remove this order?',
  actions: {
    didPerform() {
      get(this, 'perform')();
    },

    confirmDelete() {
      get(this, 'didConfirmDelete')();
      console.log('we want to CONFIRM that the order can be deleted');
    },

    deleteOrder() {
      // get(this, 'didDelete')();
      set(this, 'canShowModal', true);
    },

    cancel() {
      get(this, 'cancel')();
    }
  }
});
