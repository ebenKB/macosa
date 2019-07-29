import DS from 'ember-data';

export default DS.Model.extend({
  order_no: DS.attr('number'),
  date: DS.attr(),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  currency: DS.attr('string'),
  profit: DS.attr('number'),
  customer_id: DS.belongsTo('customer'),
  account_manager_id: DS.belongsTo('account-manager'),
});
