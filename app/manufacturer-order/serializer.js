import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    manufacturer_id: {
      serialize: 'ids',
      deserialize: 'ids'
    },
    order_id: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  }
});
