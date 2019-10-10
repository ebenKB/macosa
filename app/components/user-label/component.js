import Component from '@ember/component';
import { set, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),
  // check: true,
  // didAttemptDelete: false,

  didUpdateAttrs() {
    console.log('the attributes have changed');
  },

  actions: {
    setAsAdmin() {

    },

    didCheck() {
      this.get('didCheckBox')();
    },

    deleteUser() {
      get(this, 'didAttemptDelete')();
    },

    resetUser() {
      console.log('you want to reset the user');
    }
  },

  // set the user as an admin
  _setAdmin(user) {
    set(user, 'is_Admin', true);
    user.save();
  },

  // revoke admin from the user
  _revokeAdmin(user) {
    set(user, 'is_admin', false);
  }
});

