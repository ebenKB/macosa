import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model({ token }) {
    return get(this, 'store').queryRecord('invitation', {
      token
    })
      .catch((err) => {
        console.log('an error occurred', err);
        // alert('an error occured', err);
      // show error message
        // this.transitionTo('login');
      });
  }
});
