
import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import config from 'macosa/config/environment';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),
  password: '',
  password_confirmation: null,
  isSaving: false,

  actions: {
    // update user passwords with new passwords
    updatePassword() {
      if (this.password === this.password_confirmation) {
        set(this, 'isSaving', true);
        const token = get(this, 'model');
        const reqOptions = {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          mode: 'cors',
          body: JSON.stringify({
            password: this.password,
            password_confirmation: this.password_confirmation,
            token: get(this, 'token'),
          }),
          dataType: JSON,
        };
        fetch(`${config.apiEndpoint}/${config.apiNamespace}/users/password_update?token=${token}`, reqOptions)
          .then((response) => {
            response.json()
              .then((data) => {
                if (!data.error) {
                  set(this, 'isSaving', false);
                  get(this, 'notifications').showSuccess('Success! Your password has been reset');
                  this.transitionToRoute('login');
                } else {
                  this.get('notifications').showError('sorry an occured');
                  set(this, 'isSaving', false);
                }
              });
          });
      } else {
        // the passwords do not match
      }
    },
  }
});
