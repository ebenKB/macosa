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
  title: 'Are you sure you want to save the changes?',
  // help: 'Update on order, business unit order or manufacturer orders related to this order',
  actions: {
    editOrder(order) {
      set(this, 'didEdit', true); // this will always show the confirmation modal

      //set the customer id incase it has changed
      const customer_id = get(order, 'customer_id');

      // update the association if and only if the association has a new item by checking for the string id
      if (typeof customer_id === 'string') {
        const customer = get(this, 'store').peekRecord('customer', customer_id);
        set(order, 'customer_id', customer);
      }

      // const bUnit = get(order, 'business_unit_orders_attributes');
      // bUnit.map((d) => {
      //   console.log('this is the amount', d.business_unit_id);
      //   return null;
      // });

      if ((get(order, 'isDirty'))) {
        set(this, 'didEdit', true);
      }
      set(this, 'newOrder', order);
    },

    saveOrder() {
      set(this, 'isUpdating', true);
      this.newOrder.save()
        .then(() => {
          set(this, 'isUpdating', false);
          set(this, 'didEdit', false);
        });
    },

    cancel() {
      this.transitionToRoute('order.index');
    },

    validate() {
      console.log('we want to validate the obkect');
    }
  },
  init() {
    this._super();
    set(this, 'help', help);
  }
});
