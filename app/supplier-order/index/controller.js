import Controller from '@ember/controller';
import help from 'macosa/help/supplier-order/show';
import { set } from '@ember/object';

export default Controller.extend({
  didAttemptDelete: false,
  canPreviewOrder: true,

  actions: {
    perform() {

    },
    didSelectOrder() {
      console.log('you have selected an order');
    },

    didDelete() {
      console.log('IN THE DELTE: We want delete an order');
      set(this, 'didAttemptDelete', true);
    },
    confirmDelete() {
      console.log('we want to confirm the DELETE ACTION');
    }
  },

  init(){
    this._super();
    set(this, 'help', help);
  }
});
