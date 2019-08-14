import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return RSVP.hash({
      companies: get(this, 'store').findAll('company'),
    });
  }
});
