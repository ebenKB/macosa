import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  is_admin: DS.attr('boolean'),
  phone: DS.attr('string'),

  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
});
