/* eslint-disable no-duplicate-imports */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    const owner_id = localStorage.getItem('owner_id');
    if (owner_id != null && owner_id != 'undefine') {
      // return get(this, 'store').peekRecord('owner', owner_id)
      //   .then((owner) => {
      //     set(this, 'owner', owner);
      //   });
      return set(this, 'owner', owner_id);
      // return owner_id;
    } else {
      return RSVP.resolve();
    }
  }
});
