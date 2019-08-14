import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  title: DS.attr('string'),
  company_id: DS.belongsTo('company'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  background: DS.attr('string'),

  // add a transient property to check whether the contact is selected or not
  isSelected: false,
});
