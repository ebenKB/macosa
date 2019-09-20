import Controller from '@ember/controller';
import { set } from '@ember/object';
import help from 'macosa/help/notification/help';

export default Controller.extend({
  init() {
    this._super();
    set(this, 'help', help);
  }
});
