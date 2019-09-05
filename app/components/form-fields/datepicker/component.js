import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  changeset: null,
  classNames: 'ui input',
  theme: 'dark-theme',

  actions: {
    setValue(value) {
      set(this.changeset, 'date', value);
      console.log('this is the changeset', value);
    }
  }
});
