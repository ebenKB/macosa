import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    account_manager_id: {
      serialize: 'ids',
      deserialize: 'ids'
    },
    // customer_id: {
    //   serialize: 'records',
    //   deserialize: 'ids'
    // },

    currency_id: {
      serialize: 'ids',
      deserialize: 'ids'
    },
    business_unit_orders_attributes: { serialize: 'records', deserialize: 'records' },
    manufacturer_orders_attributes: { serialize: 'records', deserialize: 'records' },
  }
});
