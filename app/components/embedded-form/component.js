import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  changesetObj: null,
  amount: null,
  property: 'amount',
  actions: {
    validate() {
      get(this, 'validate')();
    }
  },

  didReceiverAttrs(){
    console.log('we have received some attributes', this.changeObj);
  },

  willRender() {
    console.log('The company will render', this.changeObj);
  }
});
