import DS from 'ember-data';

export default DS.Model.extend({
  manufacturer_id: DS.belongsTo('manufacturer'),
  amount: DS.attr('number'),
  order_id: DS.belongsTo('order')
});
