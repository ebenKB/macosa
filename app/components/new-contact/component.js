import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  changesetObj: null,
  titles: null,
  number: 1,
  actions: {
    perform() {
      get(this, 'perform')();
    },
    cancel() {

    },
    validate() {
      get(this, 'validate')();
    }
  }
});
