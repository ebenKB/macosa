import Controller from '@ember/controller';
import OrderValidations from 'macosa/validations/order';
import BusinessUnitOrder from 'macosa/validations/manufacturer-order';
import ManufacturerOrder from 'macosa/validations/business-unit-order';

export default Controller.extend({
  OrderValidations,
  BusinessUnitOrder,
  ManufacturerOrder,

  help: 'Update on order, business unit order or manufacturer orders related to this order',
  actions: {
    editOrder(order) {
      console.log('this is the changeset to update', order);
      // order.save();
    },
    cancel() {

    },
    validate() {

    }
  }
});
