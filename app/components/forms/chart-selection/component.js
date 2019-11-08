import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  classNames: null,
  property: null,
  from: null,
  to: null,
  canSetYear: false,

  actions: {
    setToValue(val) {
      set(this, 'to', this.formatDate(val));
      get(this, 'checkDate')();

    },
    setFromValue(val) {
      set(this, 'from', this.formatDate(val));
      get(this, 'checkDate')();

    },
    
  },
  formatDate(date) {
    // const date = new Date(val);
    console.log('This is the day', date);
    const newDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${(date.getDate())}`;
    return newDate;
  },
  init() {
    this._super();
    set(this, 'months', ['JAN', 'FEB.', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG.', 'SEPT.', 'OCT.', 'NOV.', 'DEC']);
  }
});
