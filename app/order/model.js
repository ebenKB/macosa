import DS from 'ember-data';

export default DS.Model.extend({
  order_no: DS.attr('number'),
  date: DS.attr(),
  description: DS.attr('string'),
  amount: DS.attr(),
  profit: DS.attr(),
  customer_id: DS.belongsTo('customer'),
  account_manager_id: DS.belongsTo('account-manager'),
});
