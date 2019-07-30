import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  website: DS.attr('string'),
  address: DS.attr('string'),
  type_id: DS.belongsTo('type', { inverse: null }),
  // type_id: DS.attr('string'),
  background: DS.attr('string'),
  owner_id: DS.attr()
});
