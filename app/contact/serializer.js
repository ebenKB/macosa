import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    company_id: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  }
});
