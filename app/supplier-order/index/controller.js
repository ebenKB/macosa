import Controller from '@ember/controller';
import help from 'macosa/help/supplier-order/show';
import { get, set } from '@ember/object';
import {inject as service} from '@ember/service';
import Delete from 'macosa/util/deleteModel';
import OrderValidations from 'macosa/validations/order';

export default Controller.extend({
  queryParams: ['manufacturer_id'],
  session: service(),
  OrderValidations,
  didAttemptDelete: false,
  canPreviewOrder: false,
  selectedOrder: null,
  isSaving: false,
  supplierTitle: 'All Suppliers',

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
        .then(() => {
          set(this, 'isSaving', false);
          get(this, 'notifications').showSuccess('One item has been removed');
          set(this.selectedOrder, 'is_deleted', true);
          get(this, 'store').unloadRecord(this.selectedOrder);
        })
        .catch((err) => console.log('an error occured', err));
    },

    cancelPreview() {
      set(this, 'canPreviewOrder', false);
    },

    didInit() {
      console.log('we want to init the application');
    },

    didSelectItem(item, type) {
      if (type === 'supplier') {
        set(this, 'manufacturer_id', item.id);
        set(this, 'supplierTitle', item.name);
      }
    },

    resetFilter() {
      set(this, 'supplierTitle', 'All suppliers');
      set(this, 'manufacturer_id', null);
    }
  },

  init() {
    this._super();
    set(this, 'help', help);
    set(this, 'suppliers', get(this, 'store').findAll('manufacturer'));
  }
});
