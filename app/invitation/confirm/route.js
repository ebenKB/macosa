import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model({ token }) {
    console.log('we want to confirm');
    console.log('this is the token', token);
    return get(this, 'store').queryRecord('invitation', {
      token
    })
      .catch((err) => {
        alert('sorry! token is invalid or expired');
      // show error message
        this.transitionTo('login');
      });
  }
});
