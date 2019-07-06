import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    const owner = get(this, 'store').findAll('owner');
    if (owner.length == 0) {
      this.transitionTo('signup');
    } else {
      return this.store.createRecord('user', {
        email: '',
        password: '',
      });
    }
  }
});


// model() {
//   get(this, 'store').findAll('owner')
//     .then(() => {
//       this.transitionTo('login');
//     })
//     .catch(() => {
//       this.transitionTo('signup');
//     });
// },