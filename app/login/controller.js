import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),
    password: null,
    email: null,

    actions: {
      authentiate() {
        let { email, password } = this.getProperties('email, password');
        this.get(this, 'session').authenticate('authenticator:oauth2-custom', email, password)
            .then(() => {
              console.log('we have authenticated');
            })
            .catch((reason) => {
              console.log('an error occured with the reason', reason.error || reason);
            })
      }
    }
});
