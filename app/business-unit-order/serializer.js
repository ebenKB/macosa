import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    business_unit_id: {
      serialize: 'ids',
      deserialize: 'ids'
    },
    order_id: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  }
});
