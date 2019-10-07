import Controller from '@ember/controller';
import help from 'macosa/help/supplier-order/show';
import { get, set } from '@ember/object';
import {inject as service} from '@ember/service';
import Delete from 'macosa/util/deleteModel';
import OrderValidations from 'macosa/validations/order';

export default Controller.extend({
  session: service(),
  OrderValidations,
  didAttemptDelete: false,
  canPreviewOrder: false,
  selectedOrder: null,
  isSaving: false,

  actions: {
    perform() {

    },

    didSelectOrder(order) {
      set(this, 'selectedOrder', order);
      set(this, 'canPreviewOrder', true);
    },

    didDelete(order) {
      set(this, 'didAttemptDelete', true);
      set(this, 'selectedOrder', order);
    },

    confirmDelete() {
      set(this, 'isSaving', true);
      set(this, 'didAttemptDelete', false);
      const {token} = get(this, 'session.data.authenticated');
      const { id } = this.selectedOrder;
      Delete.softDelete('supplier_orders', id, token)
        .then((d) => {
          console.log('this is the response from the api', d);
          set(this, 'isSaving', false);
          get(this, 'notifications').showSuccess('One item has been removed');
          set(this.selectedOrder, 'is_deleted', true);
          get(this, 'store').unloadRecord(this.selectedOrder);
        })
        .catch((err) => console.log('an error occured', err));
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
