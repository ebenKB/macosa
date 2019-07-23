import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import config from 'macosa/config/environment';
import { set } from '@ember/object';

export default Controller.extend({
  session: service(),
  password: '',
  email: '',
  isAuthenticating: false,
  hasError: false,
  error: '',

  actions: {
    authenticate() {
      if (this._validateInput()) {
        set(this, 'isAuthenticating', true);
        this.get('session').authenticate('authenticator:jwt', // validate the session
          { email: this.email, password: this.password})
          .then(() => {
            set(this, 'isAuthenticating', false);
          })
          .catch(() => {
            // show error and invalidate the session
            this._showError('Sorry, no record matches your credentials');
            this.get('session').invalidate();
          });
      }
    }
  },

  _showError(msg) {
    set(this, 'isAuthenticating', false);
    set(this, 'hasError', true);
    set(this, 'error', msg);
  },

  _validateInput() {
    return this.password != '' && this.email != '';
  }
});
