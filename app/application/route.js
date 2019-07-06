import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  // model() {
  //   get(this, 'store').findAll('owner')
  //     .then(() => {
  //       this.transitionTo('login');
  //     })
  //     .catch(() => {
  //       this.transitionTo('signup');
  //     });
  // },
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
    // console.log('we want to load the current user from the auth');
    return get(this, 'currentUser').load()
      .catch(() => get(this, 'session').invalidate());
  }
});
