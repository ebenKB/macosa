import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
  infinity: service(),
  model() {
    return this.infinity.model('supplier-order')
      .catch((err) => {
        console.log('This is the error that has occured', err);
      });
  }
});
