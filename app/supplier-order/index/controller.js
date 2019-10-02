import Controller from '@ember/controller';
import help from 'macosa/help/supplier-order/show';
import { get, set } from '@ember/object';
import OrderValidations from 'macosa/validations/order';

export default Controller.extend({
  OrderValidations,
  didAttemptDelete: false,
  canPreviewOrder: false,
  selectedOrder: null,

  actions: {
    perform() {

    },

    didSelectOrder(order) {
      set(this, 'selectedOrder', order);
      set(this, 'canPreviewOrder', true);
    },

    didDelete() {
      set(this, 'didAttemptDelete', true);
    },

    confirmDelete() {
      if (this.selectedOrder !== null) {
        this.selectedOrder.destroyRecord();
        get(this, 'notifications').showSuccess('One record has been removed');
      }
    },

    cancelPreview() {
      set(this, 'canPreviewOrder', false);
    }
  },

  init() {
    this._super();
    set(this, 'help', help);
  }
});
