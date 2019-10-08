import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  infinity: service(),
  queryParams: {
    user_id: {
      refreshModel: true,
    }
  },
  model(params) {
    if (params.user_id !== null) {
      return this.infinity.model('notification', {infinityCache: 60000, user_id: params.user_id});
    } else {
      return this.infinity.model('notification', {infinityCache: 60000});
    }
  },
});

