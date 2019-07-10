import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  check: true,

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

