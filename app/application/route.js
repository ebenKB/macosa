import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Route.extend(ApplicationRouteMixin, {
    currentUser: service(),
    session: service(),

    beforeModel() {
      return this._loadCurrentUser();
    },

    sessionAuthenticated() {
        this._super(...arguments);
        this._loadCurrentUser();
    },

    // fetch and return the currently logged in user
    _loadCurrentUser() {
      console.log('we want to load the current user from the auth');
      return get(this, 'currentUser').load()
          .catch(() => get(this, 'session').invalidate());
    }
});
