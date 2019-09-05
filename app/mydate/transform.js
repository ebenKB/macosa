import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    console.log('IN THE DESERIALIZE', serialized);
    return serialized;
  },

  serialize(deserialized) {
    console.log('this is the date', deserialized);
    if (deserialized === null)
      return deserialized;

    // formate of the date YYYY/MM/DD
    let date = null;
    try {
      date = `${deserialized.getFullYear()}-${(deserialized.getMonth() + 1)}-${deserialized.getDate()}`;
    } catch (err){
      const mDate = deserialized.split('T')[0];
      console.log('this is mDate', mDate);
      date = mDate;
    }
    console.log('returning this date: ', date);
    return date;
  }
});
