import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  description: [
    validatePresence(true),
    validateLength({min: 3}),
  ],

  profit: [
    validatePresence(true),
    validateFormat({type: 'number'})
  ],

  amount: [
    validatePresence(true),
    validateFormat({type: 'number'}),
    validateLength({min: 3}),
  ],

  date: [
    validateFormat({type: 'date'})
  ]
};

// order_no: DS.attr('number'),
//   date: DS.attr('mydate'),
//   description: DS.attr('string'),
//   amount: DS.attr('number'),
//   profit: DS.attr('number'),
//   user_id: DS.belongsTo('user'),
//   customer_id: DS.belongsTo('customer'),
//   account_manager_id: DS.belongsTo('account-manager'),
//   currency_id: DS.belongsTo('currency'),
//   business_unit_orders_attributes: DS.hasMany('business-unit-order', { async: false}),
//   manufacturer_orders_attributes: DS.hasMany('manufacturer-order', { async: false}),
