import Controller from '@ember/controller';
import OrderValidations from '../../validations/order';
import { get, set, computed } from '@ember/object';
// import $ from 'jquery';

export default Controller.extend({
  OrderValidations,
  businessUnitOrders: null,
  remainder: computed('businessUnitOrders', function() {
    console.log('computing the remainder');
    let amt = 0;
    get(this, 'businessUnitOrders').map((b) => {
      amt += b.amount;
      console.log((get(this, 'model.order').amount) - amt);
    });
    return ((get(this, 'model.order').amount) - amt);
  }),
  // init() {
  //   this._super();
  //   const model = get(this, 'model');
  //   this.changesetObj = new Changeset(model, lookupValidator(orderValidations), orderValidations);
  // },

  help: 'Create new orders.',
  actions: {
    createNewOrder(changeset){
      if (get(changeset, 'isValid')) {
        console.log('you want to crate a new order');
      } else console.log('the changeset is not valid');
      changeset.save();
    },
    addBusinessUnit() {
      get(this, 'businessUnitOrders').pushObject({amount: this.remainder});
    },
    addManufacturer() {
      console.log('add new business manufacturer');
    },
    cancel() {
      conaole.log('you want to cancel the order');
    },

    validate() {
      console.log('We want to validate the input');
    }
  },

  init() {
    this._super(...arguments);
    set(this, 'businessUnitOrders', [{amount: 0,}]);
    set(this, 'manufacturer-orders', [{amount: 0 }]);
    set(this, 'currency', [{id: 'GHC', name: 'GHC'}, {id: '$', name: '$'}]);
  },
});