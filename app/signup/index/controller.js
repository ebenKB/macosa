import Controller from '@ember/controller';
import UserValidator from '../../validations/user';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  UserValidator,
  confirmPass: null,
  session: service(),

  actions: {
    createOwner(changeset) {
      if (changeset.get('isValid')) {
        changeset.save()
          .then(() => {
            // authenticate the user and log them in
            get(this, 'session').authenticate('authenticator:jwt',
              { email: get(changeset, 'email'), password: get(changeset, 'password')});
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
