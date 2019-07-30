import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    industry_id: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  }
});
