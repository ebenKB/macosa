import Component from '@ember/component';
import { set, get } from '@ember/object';

export default Component.extend({
  check: true,
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
      console.log('you want to delete the user');
      get(this, 'attemptDelete')();
    },

    confirmDelete() {
      console.log('you want to delete the user');
      get(this, 'didConfirmDelete')();
    },

    cancelDelete() {
      console.log('The delete action was cancelled');
      get(this, 'didCancelDelete')();
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

