import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  model() {
    get(this, 'store').findAll('owner')
      .then((owner) => {
        if (owner.length < 1) {
          this.transitionTo('signup');
        } else {
          // eslint-disable-next-line array-callback-return
          owner.map((o) => {
            // set the owner to the session
            this.set('session.owner',o);
          });
        }
      })
      .catch((err) => {
        // set(this, 'hasError', false);
        // set(this, 'error', 'error');
        // const error = get(err, 'error')[0];
      });
  }
});
