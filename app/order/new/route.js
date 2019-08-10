import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return RSVP.hash({
      manufacturers: get(this, 'store').findAll('manufacturer'),
      businessUnits: get(this, 'store').findAll('business-unit'),
      accountManagers: get(this, 'store').findAll('account-manager'),
      customers: get(this, 'store').findAll('customer'),
      currencies: get(this, 'store').findAll('currency'),
      order: get(this, 'store').createRecord('order', {
        order_no: '',
        order_date: new Date(),
        description: '',
        amount: 0,
        profit: 0,
        currency_id: null,
        customer_id: null,
        account_manager_id: null,
        business_unit_orders_attributes: [],
        manufacturer_orders_attributes: [],
      }),
    });
  },
  // actions: {
  //   loading(transition, originRoute) {
  //     const controller = this.controllerFor('order');
  //     controller.set('currentlyLoading', true);

  //     return true; // allows the loading template to be shown
  //   }
  // }
});
