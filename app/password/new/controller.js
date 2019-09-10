
import Controller from '@ember/controller';
import { get } from '@ember/object';
import config from 'macosa/config/environment';

export default Controller.extend({
  password: '',
  password_confirmation: null,
  isSaving: false,

  actions: {
    updatePassword() {
      if (this.password === this.password_confirmation) {
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
          .then(() => {
            console.log('we sent a put request');
          });
      } else {
        console.log('the passwords are different');
      }
    },
  }
});
