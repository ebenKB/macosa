import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    console.log('this is the params that we have:', params);
    const order = get(this, 'store').peekRecord('supplier-order', params);
    let error = null;

    if (order != null)
      return order;
    else {
      return get(this, 'store')
        .findRecord('supplier-order', params.id)
        .catch((err) => {
          error = err.errors[0];
          return error;
        });
    }
  }
});
