import Controller from '@ember/controller';
import OrderValidations from '../../validations/order';
import BusinessUnitValidation from '../../validations/businessUnitValidation';
import { get, set } from '@ember/object';
import Changeset from 'ember-changeset';

export default Controller.extend({
  OrderValidations,
  businessUnitOrders: null,
  BusinessUnitValidation,
  help: 'Create new orders.',
  hasContent: false,
  hasManufacturer: false,
  isSaving: false,
  businessUnitChangeset: null,
  actions: {
    async createNewOrder(changeset) {
      set(this, 'isSaving', true);
      // set records for manager
      const manager = this.store.peekRecord('account_manager',
        get(changeset, 'account_manager_id'));
      set(changeset,'account_manager_id', manager);

      // set records customer
      const customer = this.store.peekRecord('customer', get(changeset, 'customer_id'));
      set(changeset, 'customer_id', customer);

      // set records for currency. If no currency is selected, set the currency to the default i.e USD
      if (typeof(changeset) == 'object') {
        const currency = get(this, 'store').peekRecord('currency', 1);
        set(changeset, 'currency_id', currency);
      } else {
        const currency = get(this, 'store').peekRecord('currency', get(changeset, 'currency_id'));
        set(changeset, 'currency_id', currency);
      }
      // set business units orders
      // this.businessUnitOrders.map((order) => {
      //   const o = get(this, 'store').createRecord('business-unit-order', {
      //     business_unit_id: get(order, 'business_unit_id'),
      //     amount: get(order, 'amount'),
      //     order_id: '',
      //   });
      //   return get(changeset, 'business_unit_orders_attributes').pushObject(o);
      // });

      // set records for relationships
      this._setOrder(this.businessUnitOrders, 'business-unit-order',
        'business_unit_orders_attributes', 'business_unit_id', changeset);
      this._setOrder(this.manufacturerOrders, 'manufacturer-order',
        'manufacturer_orders_attributes', 'manufacturer_id', changeset);
      changeset.save()
        .then(() => this.transitionToRoute('order'))
        .catch(() => {
          set(this, 'isSaving', false);
          this.get('notifications')
            .showError('An error occurred while saving the oder. Please try again.');
        });
    },

    addBusinessUnit(changeset) {
      const unit_amount = this.getRemainder(changeset, 'businessUnitOrders');
      if (unit_amount > 0) {
        // const b_unit = get(this, 'store').createRecord('business-unit-order',
        //   { amount: unit_amount });

        const b_unit = { amount: unit_amount};
        // create a new changeset object
        const unit = new Changeset(b_unit, { skipValidate: true });
        get(this, 'businessUnitOrders').pushObject(unit);
        set(this, 'hasContent', get(this, 'businessUnitOrders.length') > 0);
      } else {
        this.get('notifications').showError('You must provide a price for the order');
      }
    },

    addManufacturer(changeset) {
      const m_order_amount = this.getRemainder(changeset, 'manufacturerOrders');
      if (m_order_amount > 0) {
        // const manufacturer = get(this, 'store').createRecord('manufacturer',
        //   { amount: m_order_amount});
        const manufacturer = { amount: m_order_amount };
        get(this, 'manufacturerOrders').pushObject(manufacturer);
        set(this, 'hasManufacturer', get(this, 'manufacturerOrders.length') > 0);
      } else {
        this.get('notifications').showError('You must provide a price for the order');
      }
    },

    cancel(changeset) {
      changeset.rollback();
    },

    validate() {
      console.log('We want to validate the input');
    },

    initPopUp(model) {
      console.log('we want to init the popup', model);
      if (model == 'business_unit') {
        console.log('the model is business unit', model);
        this.businessUnitChangeset = new Changeset({ name: '' }, { skipValidate: true });
      }
    }
  },

  init() {
    this._super(...arguments);
    set(this, 'businessUnitOrders', []);
    set(this, 'manufacturerOrders', []);
    set(this, 'currency', [{id: 'GHC', name: 'GHC'}, {id: '$', name: '$'}]);
  },

  getRemainder(changeset, item) {
    let amt = 0;
    get(this, item).map((b) => {
      return amt += parseFloat(get(b, 'amount'));
    });
    return ((get(changeset, 'amount')) - amt);
  },

  /**
   * @param {*} order the order that we want to set to the changeset
   * @param {*} record the name of the record in the order model
   * @param {*} type the type of the relation.
   * @param {*} relatedBy the name of the relation
   * @param {*} changeset the changeset object
   */
  _setOrder(order, record, type, relatedBy, changeset) {
    const obj = this;
    order.map((nOder) => {
      const o = get(obj, 'store').createRecord(record, {
        amount: get(nOder, 'amount'),
        order_id: '',
      });
      set(o, relatedBy, get(nOder, relatedBy));
      return get(changeset, type).pushObject(o);
    });
  }
});
