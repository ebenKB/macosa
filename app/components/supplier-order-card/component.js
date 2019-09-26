import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    didDelete() {
      console.log('you want to delete an item');
      get(this, 'didDelete')();
    },
    editItem() {
      console.log('you want to edit an item');
    }
  }
});
