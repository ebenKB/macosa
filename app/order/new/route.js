import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return RSVP.hash({
      // manufacturers: get(this, 'store').findAll('manufacturer'),
      // businessUnits: get(this, 'store').findAll('businessUnit'),
      // managers: get(this, 'store').findAll('accountManager'),
      order: get(this, 'store').createRecord('order', {
        order_no: '',
        date: '',
        description: '',
        amount: 10,
        currency: '',
        profit: 0,
        customer_id: null,
        account_manager_id: null,
      }),
    });
  },

});
