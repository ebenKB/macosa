import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  actionName: '',
  classNames: null,
  hasAction: false,
  actions: {
    perform() {
      get(this, 'perform')();
    }
  }
});
