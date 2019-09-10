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
      if (get(changeset, 'account_manager_id')) {
        const manager = this.store.peekRecord('account_manager',
          get(changeset, 'account_manager_id'));
        set(changeset,'account_manager_id', manager);
      }

      // set records customer
      if (get(changeset, 'customer_id')) {
        const customer = this.store.peekRecord('customer', get(changeset, 'customer_id'));
        set(changeset, 'customer_id', customer);
      }

      // set records for currency. If no currency is selected, set the currency to the default i.e USD
      if (typeof(changeset) == 'object') {
        const currency = get(this, 'store').peekRecord('currency', 1);
        set(changeset, 'currency_id', currency);
      } else {
        const currency = get(this, 'store').peekRecord('currency', get(changeset, 'currency_id'));
        set(changeset, 'currency_id', currency);
      }

      // set records for relationships - embed business unit orders
      this._setOrder(this.businessUnitOrders, 'business-unit-order',
        'business_unit_orders_attributes', 'business_unit_id', changeset);

      // embed manufacturer orders
      this._setOrder(this.manufacturerOrders, 'manufacturer-order',
        'manufacturer_orders_attributes', 'manufacturer_id', changeset);
      changeset.save()
        .then(() => {
          // reset fields
          set(this, 'businessUnitOrders', []);
          set(this, 'manufacturerOrders', []);
          set(this, 'isSaving', false);
          this.transitionToRoute('order');
          this.get('notifications').showSuccess('One new order has been added');
        })
        .catch(() => {
          set(this, 'isSaving', false);
          this.get('notifications')
            .showError('An error occurred while creating the oder. Please try again.');
        });
    },

    addBusinessUnit(changeset) {
      const unit_amount = this.getRemainder(changeset, 'businessUnitOrders');
      if (unit_amount > 0) {
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
    set(this, 'manufacturers', get(this, 'store').findAll('manufacturer'));
    set(this, 'businessUnits', get(this, 'store').findAll('business-unit'));
    set(this, 'accountManagers', get(this, 'store').findAll('account-manager'));
    set(this, 'customers', get(this, 'store').findAll('customer'));
    set(this, 'currencies', get(this, 'store').findAll('currency'));
  },

  getRemainder(changeset, item) {
    let amt = 0;
    get(this, item).map((b) => {
      return amt += parseFloat(get(b, 'amount'));
    });
    return ((get(changeset, 'amount')) - amt);
  },

  /**
   * @param {*} order the associations that we want to set to the changeset(order)
   * @param {*} record the name of the record in the order model
   * @param {*} type the type of the relation.
   * @param {*} relatedBy the name of the relation
   * @param {*} changeset the changeset object
   */
  _setOrder(order, record, type, relatedBy, changeset) {
    const obj = this;
    // get all the records in the association object
    order.map((nOder) => {
      const o = get(obj, 'store').createRecord(record, {
        amount: get(nOder, 'amount'),
        order_id: '',
      });

      // get the name of the association in the record and set the id to the record
      set(o, relatedBy, get(nOder, relatedBy));
      console.log('trying to set the relation', type, record, relatedBy);
      return get(changeset, type).pushObject(o);
    });
  }
});
