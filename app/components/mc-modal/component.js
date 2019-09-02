import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  canShowModal: true,
  message: 'Are you sure you want to continue ?',
  actions: {
    perform() {
      console.log('you want to perform an action');
    },
    decline() {
      console.log('you want to decline the action');
      set(this, 'canShowModal',false);
    }
  }
});
