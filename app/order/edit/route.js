import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model({id}) {
    let order = get(this, 'store').peekRecord('order', id);

    if (order == null) {
      order = get(this, 'store').findRecord('order', id);
    }
    const b_units = get(this, 'store').findAll('business-unit');
    const manufacturers = get(this, 'store').findAll('manufacturer');
    const customers = get(this, 'store').findAll('customer');
    const managers = get(this, 'store').findAll('account-manager');
    return RSVP.hash({
      order,
      b_units,
      manufacturers,
      customers,
      managers,
    });
  }
});
