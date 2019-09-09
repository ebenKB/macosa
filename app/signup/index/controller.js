import Controller from '@ember/controller';
import UserValidator from '../../validations/user';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  UserValidator,
  confirmPass: null,
  session: service(),
  isSaving: false,

  actions: {
    createOwner(changeset) {
      if (changeset.get('isValid')) {
        set(this, 'isSaving', true);
        changeset.save()
          .then(() => {
            // authenticate the user and log them in
            get(this, 'session').authenticate('authenticator:jwt',
              { email: get(changeset, 'email'), password: get(changeset, 'password')});
            set(this, 'isSaving', false);
            this.transitionToRoute('/');
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
