import Route from '@ember/routing/route';
// import { get } from '@ember/object';
// import config from 'macosa/config/environment';

export default Route.extend({
  model({ token }) {
    // const reqOptions = {
    //   method: 'GET',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    // return fetch(`${config.apiEndpoint}/${config.apiNamespace}/users/password?token=${token}`, reqOptions);
    return token;
  }
});
