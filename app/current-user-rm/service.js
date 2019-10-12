/* eslint-disable no-duplicate-imports */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),
  // route: service(),

  load() {
    const userId = get(this, 'session.data.authenticated.user_id');
    // check if the userId actually exists
    if (!isEmpty(userId)) {
      return get(this, 'store').findRecord('user', userId)
        .then((user) => {
          // set(this, 'user', user);
          this.set('user', user);
        })
        .catch(() => {
          const msg = 'An error occured while processing your request.' +
            'The application will restart in 3 seconds';
          this.get('notifications').showError(msg);
        });
    } else {
      return RSVP.resolve();
    }
  }
});
