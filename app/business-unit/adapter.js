import AppAdapter from 'macosa/application/adapter';
import config from 'macosa/config/environment';
import { underscore } from '@ember/string';

export default AppAdapter.extend({
  pathForType(type) {
    return underscore(type);
  },
  url() {
    return `${config.apiEndpoint}/${config.apiNamespace}/business_units`;
  },

  urlForFindAll(modelName, snapshot) {
    return `${config.apiEndpoint}/${config.apiNamespace}/business_units`;
  }
});