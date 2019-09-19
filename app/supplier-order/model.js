import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  amount: DS.attr('number'),
  supplier_id: DS.belongsTo('manufacturer'),
  date: DS.attr('myDate'),
  description: DS.attr('string'),

  // etoa - estimated time of arrival
  etoa: DS.attr('myDate'),
  status: DS.attr('boolean')
});
