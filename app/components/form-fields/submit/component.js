import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  title: '',
  actions: {
    perform(e) {
      e.preventDefault();
      console.log('we want to perform the action');
      get(this, 'perform')();
    }
  }
});
