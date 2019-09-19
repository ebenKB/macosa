import Controller from '@ember/controller';
import help from 'macosa/help/supplier-order/new';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    validate(changeset) {
      changeset.validate();
    },
    createNewOrder() {

    },

    cancel() {
      this.transitionToRoute('supplier-order.index');
    }
  },
  init() {
    this._super();
    set(this, 'help', help);
  }
});
