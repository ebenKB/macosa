import Controller from '@ember/controller';
import UserValidator from '../../validations/user';

export default Controller.extend({
  UserValidator,
  confirmPass: null,

  actions: {
    createOwner(changeset) {
      if (changeset.get('isValid')) {
        changeset.save();
      } else {
        console.log('NOT VALID CHANGESET');
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
