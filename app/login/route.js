import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  model() {
    get(this, 'store').findAll('owner')
      .then((owner) => {
        if (owner.length < 1) {
          this.transitionTo('signup');
        } else {
          // get the owner id and save to local storage
          // eslint-disable-next-line array-callback-return
          owner.map((o) => {
            // localStorage.setItem('owner_id', o.id);

            // set the owner to the session
            this.set('session.owner',o);
            console.log('this is the session now', this.session);
          });
        }
      })
      .catch((err) => {
        const error = get(err, 'error')[0];
        // console.log('this is the error that we have obtained from the ahsed', error.title);
      });
  }
});
