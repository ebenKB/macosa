import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  appOwner: service(),

  model() {
    return RSVP.hash({
      types: get(this, 'store').findAll('type'),
      company: get(this, 'store').createRecord('company', {
        name: '',
        email: '',
        address: '',
        type_id: null,
        background: '',
        phone: '',
        website: '',
        owner_id: null,
      })
    });
  },

  beforeModel() {
    return this._loadCurrentOwner();
  },

  afterModel() {
    console.log('This is after login');
  },
  _loadCurrentOwner() {
    return get(this, 'appOwner').load();
  }
});
