import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  help: 'Add a new company as a client or partner. This compnay will be added to your company lists. If you want to edit an existing company, go to Edit Company from the menu',
  background: null,

  init() {
    this._super(...arguments);
    set(this, 'types', [{
      name: 'Finance',
      dataValue: 'Finance'
    },
    {
      name: 'Education',
      dataValue: 'Education',
    }]);
  }
});
