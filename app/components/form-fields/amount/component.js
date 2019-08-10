import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  amntChangeset: null,
  generalChangeset: null,
  type: 'number',
  property: 'amount',
  default: 'USD',
  actions: {
    validate() {
      console.log('validating...');
      get(this, 'didValidate')();
    }
  },
  didReceiveAttrs(){
    console.log('we have received attrs', this.changeObj);
  }
});
