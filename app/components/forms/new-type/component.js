import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  didAddType: false,

  actions: {
    validate(){

    },
    perform() {
      get(this, 'didRemoveForm')();
    }
  }
});
