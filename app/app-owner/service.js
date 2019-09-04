/* eslint-disable no-duplicate-imports */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    console.log('in the load function');
    // const owner_id = localStorage.getItem('owner_id');
    const { owner } = get(this, 'session');
    console.log('this is the owner that we loaded from the session', owner);
    if (owner != null && owner != 'undefined') {
      console.log('this is the owner that we loaded from the session', owner);
      set(this, 'owner', owner.id);
      return owner;
    } else {
      return RSVP.resolve();
    }
  }
});
