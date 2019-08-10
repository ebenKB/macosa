import DS from 'ember-data';

export default DS.Model.extend({
  order_no: DS.attr('number'),
  order_date: DS.attr('string'),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  profit: DS.attr('number'),
  customer_id: DS.belongsTo('customer'),
  account_manager_id: DS.belongsTo('account-manager'),
  currency_id: DS.belongsTo('currency'),
  business_unit_orders_attributes: DS.hasMany('business-unit-order', { async: false}),
  manufacturer_orders_attributes: DS.hasMany('manufacturer-order', { async: false}),
});
