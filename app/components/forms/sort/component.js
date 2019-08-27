import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actions: {
    didSelectItem(key) {
      get(this, 'perform')(key);
    }
  }
});
