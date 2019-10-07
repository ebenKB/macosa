import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';


export default Route.extend({
  infinity: service(),
  model() {
    const per_page = 10;
    return this.infinity.model('supplier-order', { per_page, reload: true})
      .catch((err) => {
        get(this, 'notifications').showError('an error occured');
      });
  }
});
