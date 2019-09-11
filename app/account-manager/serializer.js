import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.RESTSerializer.extend({
  /**
   * This function changes attribute names to underscore attribute names
   * @param {*} attr the attribute name that we want to change
   */
  keyForAttribute(attr) {
    return underscore(attr);
  },

  /**
   * This function generates a payload key from the model name.
   * The payload key is appended as the name of the payload when you are sending data to the api
   * @param {*} modelName the model name that we want to use to generate the payload key
   */
  payloadKeyFromModelName(modelName) {
    return underscore(modelName);
  }
});
