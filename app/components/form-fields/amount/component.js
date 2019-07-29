import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  changeObj: null,
  type: 'number',
  property: 'amount',
  actions: {
    validate() {
      console.log('validating...');
      get(this, 'didValidate')();
    }
  }
});
