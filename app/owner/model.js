import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'), // name of the company the owner belongs to
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  website: DS.attr('string'),
});
