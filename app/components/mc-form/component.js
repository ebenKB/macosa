import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  role: '',
  isSaving: false,
  canPerform: true,

  actions: {
    perform() {
      get(this, 'didPerform')();
    },

    decline() {
      get(this, 'didDecline')();
    }
  }
});
