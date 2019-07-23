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
      console.log(changeset);
    },

    cancel(changeset) {
      // console.log('you want to cancel');
      return changeset.rollback();
    },

    createNewCompany(changeset) {
      if (changeset.get('isValid')) {
        set(changeset, 'owner_id', get(this, 'appOwner').owner);
        set(this, 'isSaving', true);
        changeset.save()
          .then(() => {
            set(this, 'isSaving', false);
            this.transitionToRoute('/');
          })
          .catch(() => set(this, 'isSaving', false));
      }
    }
  }
});
