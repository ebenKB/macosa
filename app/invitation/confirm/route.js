import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model({ token }) {
    return get(this, 'store').queryRecord('invitation', {
      token
    })
      .catch(() => {
        alert('sorry! token is invalid or expired');
        // show error message
        this.transitionTo('login');
      });
  }
});
