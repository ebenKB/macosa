import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  classNames: null,
  property: null,
  from: null,
  to: null,

  actions: {
    setToValue(val) {
      set(this, 'to', this.formatDate(val));
    },
    setFromValue(val) {
      set(this, 'from', this.formatDate(val));
    }
  },
  formatDate(date) {
    // const date = new Date(val);
    console.log('This is the day', date);
    const newDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${(date.getDate())}`;
    return newDate;
  }
});
