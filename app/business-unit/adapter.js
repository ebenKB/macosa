import DS from 'ember-data';
// import AppAdapter from '../application/adapter';
import config from 'macosa/config/environment';
import { underscore } from '@ember/string';

export default DS.RESTAdapter.extend({
  pathForType(type) {
    return underscore(type);
  },
  urlForFindAll(modelName, snapshot) {
    return `${config.apiEndpoint}/${config.apiNamespace}/business_units`;
  }
});