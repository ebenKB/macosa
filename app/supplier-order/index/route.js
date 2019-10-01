import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';


export default Route.extend({
  infinity: service(),
  model() {
    return this.infinity.model('supplier-order')
      .catch((err) => {
        get(this, 'notification').showError('an error occured');
      });
  }
});
