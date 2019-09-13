import Controller from '@ember/controller';
import { set, get } from '@ember/object';
import CompanyValidations from '../../validations/company';
import { inject as service } from '@ember/service';

export default Controller.extend({
  CompanyValidations,
  company_type_id: '',
  appOwner: service(),
  isSaving: false,
  didValidate: false,
  // eslint-disable-next-line max-len
  help: 'Add a new company as a client or partner. This compnay will be added to your company lists.',

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
      changeset.validate();

      if (!this.didValidate) {
        set(this, 'didValidate', true);
      }
    },

    cancel() {
      get(this, 'model').company.destroyRecord();
      this.transitionToRoute('company.index');
    },

    async createNewCompany(changeset) {
      const type = await get(this, 'store').peekRecord('type', get(changeset, 'type_id'));
      set(changeset, 'type_id', type);

      if (this.didValidate && changeset.get('isValid')) {
        // get the current owner of the app
        // const owner = get(this.appOwner.load(), '_id');
        // set(changeset, 'owner_id', owner);
        set(this, 'isSaving', true);

        // persist the record to the databse
        changeset.save()
          .then(() => {
            set(this, 'isSaving', false);
            const msg = 'Success! You added a new company';
            this.get('notifications').showSuccess(msg);
            this.transitionToRoute('company.index');
          })
          .catch(() => {
            const msg = 'Error! An error occurred while creating the company';
            this.get('notifications').showError(msg);
            set(this, 'isSaving', false);
          });
      } else {
        get(this, 'notifications').showError('Company is not valid');
      }
    }
  }
});
