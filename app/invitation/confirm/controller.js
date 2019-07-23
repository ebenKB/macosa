import Controller from '@ember/controller';
import UserValidator from '../../validations/user';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  UserValidator,
  confirmPass: null,
  isSaving: false,

  actions: {
    createNewUser(changeset) {
      if (get(changeset, 'isValid')) {
        // create a new user
        const user = get(this, 'store').createRecord('user',{
          email: get(changeset, 'email'),
          firstname: get(changeset, 'firstname'),
          lastname: get(changeset, 'lastname'),
          phone: get(changeset, 'phone'),
          password: get(changeset, 'password'),
          password_confirmation: get(changeset, 'password_confirmation'),
          access_token: get(changeset, 'access_token'),
        });
        // check if the user password is confirmed
        if (this._confirmPassword(get(changeset, 'password'),
          get(changeset, 'password_confirmation'))) {
          set(this, 'isSaving', true);
          user.save()
            .then(() => {
            //authenticate the session for the user
              set(this, 'isSaving', false);
              this.transitionToRoute('login'); // depracated feature
            })
            .catch(() => set(this, 'isSaving', false));
        } else alert('password missmatch');
      } else alert('some fields are not valid');
    },

    cancel() {
      console.log('we want to cancel the create action');
    },

    validate(changeset) {
      console.log('you want to validate the changeset');
    }
  },
  _confirmPassword(pass, pass2) {
    console.log('these are the passord', pass, pass2);
    return pass === pass2;
  }
});
