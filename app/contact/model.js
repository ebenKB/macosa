import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  title: DS.attr('string'),
  compapny_id: DS.belongsTo('company'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  background: DS.attr('string'),
});
