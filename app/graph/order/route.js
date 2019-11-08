/* eslint-disable indent */
import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  infinity: service(),
  queryParams: {
    to: {
      refreshModel: true,
    },

    from: {
      refreshModel: false,
    }
  },
  model(params) {
    if (params.to != null && params.from != null) {
      return get(this, 'store').query('order',
      params
      );
    } else {
      return get(this, 'store').findAll('order');
    }
  }
});
