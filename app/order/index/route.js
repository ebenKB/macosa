import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  infinity: service(),

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
    },
    page: {
      refreshModel: true,
    }
  },
  model(params) {
    // return get(this, 'store').findAll('order');
    // return get(this, 'store').query('order', params);
    const perPage = 10;
    // check if there are query params
    if (params.user_id || params.account_manager_id || params.manager_id || params.currency_id) {
      return this.infinity.model('order',
        {perPage, user_id: params.user_id, account_manager_id: params.account_manager_id,
          customer_id: params.customer_id, currency_id: params.currency_id});
    } else { // fetch records without any query params
      return this.infinity.model('order', {perPage, infinityCache: 60000});
      // return get(this, 'store').peekAll('order');
    }
  },
});
