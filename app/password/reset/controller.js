import Controller from '@ember/controller';
import { get } from '@ember/object';
import config from 'macosa/config/environment';

export default Controller.extend({
  actions: {
    resetPassword(){
      // console.log(get(this, 'model').email);
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
          console.log('we did a fetch');
        });
    }
  }
});
