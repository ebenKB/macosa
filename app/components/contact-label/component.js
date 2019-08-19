import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  contact: null,

  actions: {
    selectContact() {
      console.log('hey');
      get(this, 'didSelectContact')();
    }
  }
});
