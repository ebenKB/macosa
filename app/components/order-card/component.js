import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    editItem() {
      get(this, 'didSelect')();
    },
    didDelete() {
      get(this, 'didDelete')();
    }
  }
});
