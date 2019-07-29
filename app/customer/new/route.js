import Route from '@ember/routing/route';
import { get } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      industries: get(this, 'store').findAll('industry'),
      customer: get(this, 'store').createRecord('customer', {}),
    });
  }
});
