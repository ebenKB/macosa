import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),
  host: config.apiEndpoint,
  namespace: config.apiNamespace,

  authorize(xhr) {
    const { token } = this.get('session.data.authenticated');
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  },

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  headers: {
    'Content-Type': 'application/json',
  },
});
