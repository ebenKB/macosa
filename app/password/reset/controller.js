import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import config from 'macosa/config/environment';

export default Controller.extend({
  isSending: false,
  didReset: false,
  actions: {
    resetPassword(){
      set(this, 'isSending', true);
      // specify the request options
      const reqOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          'email': get(this, 'model').email,
        }),
        dataType: JSON,
      };
      fetch(`${config.apiEndpoint}/${config.apiNamespace}/users/password_reset`, reqOptions)
        .then(() => {
          set(this, 'isSending', false);
          set(this, 'didReset', true);
        });
    }
  }
});
