/* eslint-disable no-duplicate-imports */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    const owner_id = localStorage.getItem('owner_id');
    if (owner_id != null && owner_id != 'undefine') {
      console.log('we want to set the owner id to the session');
      // return get(this, 'store').peekRecord('owner', owner_id)
      //   .then((owner) => {
      //     set(this, 'owner', owner);
      //   });
      return set(this, 'owner', owner_id);
      // return owner_id;
    } else {
      console.log('we could not set the owner to session');
      return RSVP.resolve();
    }
  }
});
