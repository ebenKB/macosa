import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  amount: DS.attr('number'),
  supplier_id: DS.belongsTo('manufacturer'),
  order_id: DS.attr('string'),
  order_date: DS.attr('mydate'),
  description: DS.attr('string'),

  // etoa - estimated time of arrival
  eta: DS.attr('mydate'),
  delivered: DS.attr('boolean')
});
