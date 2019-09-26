import Route from '@ember/routing/route';
import { get } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    const order_id = params.id;
    return RSVP.hash({
      supplier_order: get(this, 'store').createRecord('supplier-order', {
        order_id,
        order_date: new Date(),
      }),
      suppliers: get(this, 'store').findAll('manufacturer'),
      order_id,
    });
  }
});
