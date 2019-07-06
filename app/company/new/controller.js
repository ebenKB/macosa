import Controller from '@ember/controller';
import { set } from '@ember/object';
import CompanyValidations from '../../validations/company';

export default Controller.extend({
  CompanyValidations,
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
  },
  actions: {
    validate(changeset) {
      changeset.validate()
        .then(() => {
          console.log(changeset.get('isValid'));
        });
      // return changeset.validate();
    },

    cancel(changeset) {
      return changeset.rollback();
    },

    createNewCompany(changeset) {
      console.log('we are creating a new company');
    }
  }
});
