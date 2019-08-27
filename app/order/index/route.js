import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  queryParams: {
    user_id: {
      refreshModel: true
    },
    customer_id: {
      refreshModel: true,
    },
    account_manager_id: {
      refreshModel: true,
    },
    currency_id: {
      refreshModel: true,
    }
  },
  model(params) {
    // return get(this, 'store').findAll('order');
    return get(this, 'store').query('order', params);
  }
});
