import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    // set the order that has been selected
    editItem() {
      get(this, 'didSelect')();
    },

    didDelete() {
      get(this, 'didDelete')();
    },

    addSupplierOrder(order) {
      console.log('this is the order id ', order.id);
    }
  }
});
