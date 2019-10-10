/* eslint-disable no-duplicate-imports */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  // load the current owner for the app
  load() {
    const { owner } = get(this, 'session');
    if (owner != null && owner != undefined) {
      set(this, 'owner', owner.id);
      return owner;
    } else {
      return RSVP.resolve();
    }
  }
});
