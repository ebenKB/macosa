import Controller from '@ember/controller';
import UserValidator from '../../validations/user';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  UserValidator,
  confirmPass: null,
  isSaving: false,

  actions: {
    createNewUser(changeset) {
      if (get(changeset, 'isValid')) {
        this.isSaving = true;
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
        user.save()
          .then(() => {
            //authenticate the session for the user
            this.isSaving = false;
          });
      }
    },

    cancel() {
      console.log('we want to cancel the create action');
    },

    validate(changeset) {
      console.log('you want to validate the changeset');
    }
  }
});
