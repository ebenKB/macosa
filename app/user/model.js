import DS from 'ember-data';

export default DS.Model.extend({
  lastname: DS.attr(),
  firstname: DS.attr(),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  owner_id: DS.attr(),
  is_admin: DS.attr('boolean'),
});
