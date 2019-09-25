import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  infinity: service(),
  model() {
    // return get(this, 'store').findAll('notification');
    return this.infinity.model('notification', {infinityCache: 60000});
  },
});
