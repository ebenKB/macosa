import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  role: 'ss',
  isSaving: false,

  actions: {
    perform() {
      get(this, 'didPerform')();
    },

    decline() {
      get(this, 'didDecline')();
    }
  }
});
