import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    console.log('calling the contact index model hook')
    return get(this, 'store').findAll('contact');
  }
});
