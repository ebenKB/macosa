import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  classNames: null,
  property: null,
  from: null,

  actions: {
    setToValue(val) {
      set(this, 'to', this.formatDate(val));
    },
    setFromValue(val) {
      set(this, 'from', this.formatDate(val));
    }
  },
  formatDate(val) {
    const date = new Date(val);
    const newDate = `${(date.getMonth() + 1)}-${(date.getDay())}-${date.getFullYear()}`;
    return newDate;
  }
});
