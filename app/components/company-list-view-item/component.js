import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  company: null,
  actions: {
    delete() {
      get(this, 'delete')();
    }
  }
});
