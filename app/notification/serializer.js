import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    user_id: {
      serialize: 'ids',
      deserialize: 'ids'
    },
  },

  modelNameFromPayloadKey() {
    return 'notification';
  },

  // normalize(model, hash, prop) {
  //   hash.key = this._pretifyKey(hash.key);
  //   return this._super(...arguments);
  // },

  // _pretifyKey(key) {
  //   const newkey = key.split('.')[1];
  //   let hashkey = null;

  //   // change the key to the past tense
  //   if (newkey === 'update' || newkey === 'create') {
  //     hashkey = `${newkey}d`;
  //   } else if (newkey === 'destroy') {
  //     hashkey = 'destroyed';
  //   } else {
  //     hashkey = newkey;
  //   }
  //   return hashkey.toUpperCase();
  // }
});
