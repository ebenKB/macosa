import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  session: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  async sessionAuthenticated() {
    this._super(...arguments);
    await this._loadCurrentUser();
  },

  // fetch and return the currently logged in user
  _loadCurrentUser() {
    return get(this, 'currentUser').load()
      .catch(() => get(this, 'session').invalidate());
  },

  // actions: {
  //   willTransition(transition) {
  //     // transition.targetName returns the public / private route that was aimed to be visited last
  //     this.set('session.previousRouteName', transition.targetName);
  //   }
  // }
});
