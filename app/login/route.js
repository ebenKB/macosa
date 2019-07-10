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
          // eslint-disable-next-line array-callback-return
          owner.map((o) => {
            localStorage.setItem('owner_id', o.id);
          });
        }
      })
      .catch((err) => {
        console.log('an error occured',err);
      });
  }
});
