import Controller from '@ember/controller';
import InvitationValidator from '../../validations/invitation';
import { get, set } from '@ember/object';

export default Controller.extend({
  is_admin: false,
  InvitationValidator,
  isSaving: false,

  help: 'Add a new company as a client or partner. This compnay will be added to your '
      + 'company lists. If you want to edit an existing company, go to Edit Company from the menu',

  actions: {
    newInvitation(changeset) {
      if (get(changeset, 'isValid')) {
        set(this, 'isSaving', true);
        changeset.save()
          .then(() => {
            set(this, 'isSaving', false);
            get(this, 'notifications').showSuccess('Invitation has been sent to ');
            this.transitionToRoute('signup.invitation');
          })
          .catch(() => {
            set(this, 'isSaving', false);
            get(this, 'notifications').showError('An error occured while sending invitation');
          });
      } else {
        alert('Please make sure all fields are valid');
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

    validate(changeset) {
      changeset.validate();
    }
  },

  // add admin privileges to the user
  _setAdmin(changeset) {
    set(changeset, 'is_admin', true);
  },

  // remove admin priviliges from the user
  _revokeAdmin(changeset) {
    set(changeset, 'is_admin', false);
  }
});
