import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  changeset: null,
  classNames: 'ui input',
  theme: 'dark-theme',
  property: 'date',

  actions: {
    setValue(value) {
      set(this.changeset, this.property, value);
    }
  }
});
