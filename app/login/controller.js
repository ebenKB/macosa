import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import config from '../config/environment';
// import { get, set } from '@ember/object';

export default Controller.extend({
  session: service(),
  password: '',
  email: '',
  isAuthenticating: false,

  actions: {
    authenticate() {
      // const params = { email: this.password, password: this.password };
      this.get('session').authenticate('authenticator:jwt', { email: this.email, password: this.password})
        .then(() => {
          console.log('we have authenticated');
        })
        .catch((reason) => {
          console.log('an error occured with the reason', reason.error || reason);
          this.get('session').invalidate();
        });
    }
  }
});
