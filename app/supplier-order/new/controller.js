import Controller from '@ember/controller';
import help from 'macosa/help/supplier-order/new';
import { get, set } from '@ember/object';

export default Controller.extend({
  didChangeOrderStatus: false,
  didCreateOrder: false,
  currentOrder: null,
  isSaving: false,

  actions: {
    validate(changeset) {
      changeset.validate();
    },
    createNewOrder(changeset) {
      set(this, 'didCreateOrder', true);
      const order = get(this, 'store').peekRecord('order', get(changeset, 'order_id'));
      // set the records for the supplier association
      const supplier = get(this, 'store').peekRecord('manufacturer', get(changeset, 'manufacturer_id'));
      set(changeset, 'manufacturer_id', supplier);
      set(changeset,'order_id', order);
      set(this, 'currentOrder', changeset);
    },

    // save the order and send a request to the backend
    saveOrder() {
      // hide the modal
      set(this, 'didCreateOrder', false);
      set(this, 'isSaving', true);

      this.currentOrder.save()
        .then(() => {
          set(this, 'isSaving', false);
          get(this, 'notifications').showSuccess('An order has been added for the supplier');
        })
        .catch(() => {
          set(this, 'didCreateOrder', false);
          set(this, 'isSaving', false);
          get(this, 'notifications').showError('An error occurred while creating the order');
        });
    },

    cancel() {
      this.transitionToRoute('order.index');
    },

    didChanageStatus(changeset) {
      // toggle the status
      if (! get(this, 'didChangeOrderStatus')) {
        set(this, 'didChangeOrderStatus', true);
      } else {
        set(this, 'didChangeOrderStatus', false);
      }
      set(changeset, 'delivered', this.didChangeOrderStatus);
    }
  },

  init() {
    this._super();
    set(this, 'help', help);
  }
});
