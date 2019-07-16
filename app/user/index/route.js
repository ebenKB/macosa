import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    console.log('we are fetching user');
    return get(this, 'store').findAll('user')
      .catch((err) => { // get the error from the response and transition to the appropriate route
        const e = get(err, 'errors');
        if (e[0].status === '401') {
          this.transitionTo('login');
        }
      });
  }
});
