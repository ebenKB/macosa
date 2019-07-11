import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  canShowModal: false,

  actions: {
    confirm() {
      console.log('you want to confirm the action');
      get(this, 'didConfirm')();
    },

    decline(){
      console.log('you want to decline the action');
      get(this, 'didDecline')();
    }
  }
});
