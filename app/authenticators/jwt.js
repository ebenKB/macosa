import Base from 'ember-simple-auth/authenticators/base';
import { isEmpty } from '@ember/utils';
import config from 'macosa/config/environment';
import { run } from '@ember/runloop';

export default Base.extend({
  tokenEndpoint: `${config.apiEndpoint}/${config.apiNamespace}/users/login`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  // send user credentials to the server for validtion
  authenticate(credentials) {
    const { email, password } = credentials;
    const data = JSON.stringify({
      email,
      password,
    });

    // specify the request options
    const reqOptions = {
      url: this.tokenEndpoint,
      method: 'POST',
      mode: 'cors',
      body: data,
      dataType: JSON,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return new Promise((resolve, reject) => {
      fetch(this.tokenEndpoint, reqOptions)
        .then((response) => {
          response.json()
            .then((data) => {
            // use run to wrapp asyn operation in ember
              run(() => {
                if (! data.error) {
                  const [token, id] = data.access_token;
                  resolve({token, user_id: id});
                } else {
                  reject(data.error);
                }
              });
            }, (error) => {
              run(() => {
                reject(error);
              });
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
