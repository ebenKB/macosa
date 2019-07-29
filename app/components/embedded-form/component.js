import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  changeObj: null,
  actions: {
    validate() {
      get(this, 'validate')();
    }
  }
});
