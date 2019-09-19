import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import OrderValidations from 'macosa/validations/order';
import BusinessUnitOrder from 'macosa/validations/manufacturer-order';
import ManufacturerOrder from 'macosa/validations/business-unit-order';
import help from 'macosa/help/order/edit';

export default Controller.extend({
  OrderValidations,
  BusinessUnitOrder,
  ManufacturerOrder,
  didEdit: false,
  isUpdating: false,
  newOrder: null,
  // bUnitOrders: null,
  title: 'Are you sure you want to save the changes?',
  // help: 'Update on order, business unit order or manufacturer orders related to this order',
  actions: {
    editOrder(order) {
      //set the customer id incase it has changed
      const customer_id = get(order, 'customer_id');

      // update the association if and only if the association has a new item by checking for the string id
      if (typeof customer_id === 'string') {
        const customer = get(this, 'store').peekRecord('customer', customer_id);
        set(order, 'customer_id', customer);
      }

      // check if the model has changed
      if ((get(order, 'isDirty'))) {
        this._validateSubUnitOrders(order).then(() => {
          set(this, 'didEdit', true); // this will always show the confirmation modal
        })
          .catch(() => {
            get(this, 'notifications')
              .showError('Sorry! the total price for orders does not tally');
          });
      }
      set(this, 'newOrder', order);
    },

    saveOrder() {
      set(this, 'isUpdating', true);
      this.newOrder.save()
        .then(() => {
          set(this, 'isUpdating', false);
          set(this, 'didEdit', false);
          get(this, 'notifications').showSuccess('The order has been updated');
        });
    },

    cancel() {
      this.transitionToRoute('order.index');
    },

    validate() {
      // console.log('we want to validate the obkect');
    }
  },
  init() {
    this._super();
    set(this, 'help', help);
  },

  _validateSubUnitOrders(order) {
    return new Promise((resolve, reject) => {
      // validate the business unit orders
      const bUnitOrders = get(order, 'business_unit_orders_attributes');
      let subTotal = 0;
      bUnitOrders.map((d) => {
        return subTotal += parseFloat((get(d, 'amount')));
      });
      if (subTotal == get(order, 'amount')) {
        resolve(true);
      } else {
        reject(false);
      }

      // validate the manufacturer orders
      const mOrders = get(order, 'manufacturer_orders_attributes');
      subTotal = 0;
      mOrders.map((d) => {
        return subTotal += parseFloat((get(d, 'amount')));
      });
      if (subTotal == get(order, 'amount')) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
});
