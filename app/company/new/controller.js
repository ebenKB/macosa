import Controller from '@ember/controller';
import { set, get } from '@ember/object';
import CompanyValidations from '../../validations/company';
import { inject as service } from '@ember/service';

export default Controller.extend({
  CompanyValidations,
  company_type_id: '',
  appOwner: service(),
  isSaving: false,
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
      // changeset.validate();
      // console.log('you want to validate');
      // console.log(changeset);
    },

    cancel(changeset) {
      // console.log('you want to cancel');
      return changeset.rollback();
    },

    async createNewCompany(changeset) {
      const type = await get(this, 'store').peekRecord('type', get(changeset, 'type_id'));
      set(changeset, 'type_id', type);

      if (changeset.get('isValid')) {
        const owner = get(this.appOwner.load(), '_id');
        set(changeset, 'owner_id', owner);
        set(this, 'isSaving', true);
        changeset.save()
          .then(() => {
            set(this, 'isSaving', false);
            const msg = 'Success! You added a new company';
            this.get('notifications').showSuccess(msg);
            this.transitionToRoute('/');
          })
          .catch(() => {
            const msg = 'Error! An error occurred while creating the company';
            this.get('notifications').showError(msg);
            set(this, 'isSaving', false);
          });
      }
    }
  }
});
