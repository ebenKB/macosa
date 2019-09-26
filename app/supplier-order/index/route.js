import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
  infinity: service(),
  model() {
    const perPage = 10;
    // return this.infinity.model('supplier-order');
  }
});
