import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized;
  },

  serialize(deserialized) {
    // formate of the date YYYY/MM/DD
    const date = `${deserialized.getFullYear()}-${(deserialized.getMonth() + 1)}-${deserialized.getDate()}`;
    console.log('this is the data parsed to the transform', date);
    return date;
  }
});
