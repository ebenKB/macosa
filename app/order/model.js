import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  order_no: DS.attr('number'),
  date: DS.attr('mydate'),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  profit: DS.attr('number'),
  user_id: DS.belongsTo('user', {async: true}),
  customer_id: DS.belongsTo('customer', { async: true}),
  account_manager_id: DS.belongsTo('account-manager', {async: true}),
  currency_id: DS.belongsTo('currency', {async: true}),
  business_unit_orders_attributes: DS.hasMany('business-unit-order', { async: true}),
  manufacturer_orders_attributes: DS.hasMany('manufacturer-order', { async: true}),

  summary: computed('description', function() {
    if (this.description !== null) {
      return `${this.description.split(' ').splice(0, 40).join(' ')}`;
    }
  }),

  // add a transient property to determine the state of the model
  is_deleted: false,
});
