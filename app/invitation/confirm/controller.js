import Controller from '@ember/controller';
import UserValidator from '../../validations/user';

export default Controller.extend({
  UserValidator,
  confirmPass: null,

  actions: {
    createNewUser(changeset) {
      console.log('we want to create a new user', changeset);
    },

    cancel() {
      console.log('we want to cancel the create action');
    },

    validate(changeset) {
      console.log('you want to validate the changeset');
    }
  }
});
