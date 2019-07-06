import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiEndpoint,
  namespace: config.apiNamespace,

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  headers: {
    'Content-Type': 'application/json',
  },
});
