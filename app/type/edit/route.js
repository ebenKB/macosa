import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(param) {
    const { id } = param;
    let type = get(this, 'store').peekRecord('type', id);
    if (type === null) {
      console.log('fetching from the api');
      type = get(this, 'store').findRecord('type', id);
    }
    return type;
  }
});
