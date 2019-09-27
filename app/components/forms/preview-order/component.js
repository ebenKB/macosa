import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  changesetObj: null,
  canShowModal: false,
  canPerform: false,
  order: null,
  role: '',
  title: 'Are you sure you want to delete this order ?',
  actions: {
    editOrder() {
    },

    // when a user attempts to delete an order
    deleteOrder(){
      set(this, 'canShowModal', true);
      console.log('this is the order', this.order);
    },

    // confirm delete for an order
    confirmDelete() {
      // this.order.destroyRecord();
      console.log('you have confired the delete for the order', this.order);
    },

    didPerform() {
      get(this, 'didPerform')();
    },

    cancel() {
      get(this, 'cancel')();
    },

    validate() {

    }
  }
});
