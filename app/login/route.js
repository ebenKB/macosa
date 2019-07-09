import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    get(this, 'store').findAll('owner')
      .then((owner) => {
        if (owner.length < 1) {
          this.transitionTo('signup');
        } else {
          // get the owner id and save to local storage
          owner.map((o) => {
            localStorage.setItem('owner_id', o.id);
          });
        }
      });
  }
});
