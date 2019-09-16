import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return prettyDate(serialized);
  },

  serialize(deserialized) {
    if (deserialized === null)
      return deserialized;

    // formate of the date YYYY/MM/DD
    let date = null;
    try {
      date = `${deserialized.getFullYear()}-${(deserialized.getMonth() + 1)}-${deserialized.getDate()}`;
    } catch (err){
      const mDate = deserialized.split('T')[0];
      date = mDate;
    }
    return date;
  }
});

function prettyDate(d) {
  // formate of the date YYYY/MM/DD
  let date = null;

  try {
    date = `${d.getFullYear()}-${(d.getMonth() + 1)}-${d.getDate()}`;
  } catch (err){
    const mDate = d.split('T')[0];
    date = mDate;
  }
  return date;
}