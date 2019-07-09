/* eslint-disable no-duplicate-imports */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    const userId = get(this, 'session.data.authenticated.user._id');
    // check if the userId actually exists
    if (!isEmpty(userId)) {
      return get(this, 'store').findRecord('user', userId)
        .then((user) => {
          set(this, 'user', user);
        });
    } else {
      // console.log('sorry the user is empty');
      return RSVP.resolve();
    }
  }
});
