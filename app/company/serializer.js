import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    type_id: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  }
});
