import DS from 'ember-data';

export default DS.Model.extend({
  business_unit_id: DS.belongsTo('business-unit'),
  amount: DS.attr('number'),
  order_id: DS.belongsTo('order')
});
