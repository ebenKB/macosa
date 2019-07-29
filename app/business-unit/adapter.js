import AppAdapter from 'macosa/application/adapter';
import config from 'macosa/config/environment';
import { underscore } from '@ember/string';

export default AppAdapter.extend({
  pathForType(type) {
    return underscore(type);
  },
  urlForFindAll(modelName, snapshot) {
    return `${config.apiEndpoint}/${config.apiNamespace}/business_units`;
  }
});