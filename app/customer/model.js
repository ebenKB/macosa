import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  industry_id: DS.belongsTo('industry', { async: true }),
});
