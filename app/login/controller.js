import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  session: service(),
  password: null,
  email: null,
  isAuthenticating: false,

  actions: {
    login(model) {
      console.log('you want to login');
      get(this, 'model').save();
      set(model, 'isAuthenticating', true);
    },
    authentiate(model) {
      const { email, password } = this.getProperties('email, password');
      this.get(this, 'session').authenticate('authenticator:oauth2-custom', email, password)
        .then(() => {
          console.log('we have authenticated');
        })
        .catch((reason) => {
          console.log('an error occured with the reason', reason.error || reason);
        });
    }
  }
});
