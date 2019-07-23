import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  appOwner: service(),
  session: service(),

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

  // actions: {
  //   loading(transition, originRoute) {
  //     const controller = this.controllerFor('company.new');
  //     controller.set('currentlyLoading', true);
  //     transition.promise.finally(function() {
  //       controller.set('currentlyLoading', false);
  //     });
  //   }
  // },
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
