import Controller from '@ember/controller';
import InvitationValidator from '../../validations/invitation';
import { get, set } from '@ember/object';

export default Controller.extend({
  is_admin: false,
  InvitationValidator,
  help: 'Add a new company as a client or partner. This compnay will be added to your '
      + 'company lists. If you want to edit an existing company, go to Edit Company from the menu',

  actions: {
    newInvitation(changeset) {
      if (get(changeset, 'isValid')) {
        console.log('the invitation is valid');
        changeset.save();
      } else {
        console.log('the invitation is not valid');
      }
    },
    // set the role of the user
    setRole(changeset) {
      this.toggleProperty('is_admin');
      if (this.is_admin) {
        this._setAdmin(changeset);
      } else {
        this._revokeAdmin(changeset);
      }
    },

    validate() {
      console.log('you want to validate the changeset');
    }
  },

  // add admin privileges to the user
  _setAdmin(changeset) {
    set(changeset, 'is_admin',true);
  },

  // remove admin priviliges from the user
  _revokeAdmin(changeset) {
    set(changeset, 'is_admin', false);
  }
});
