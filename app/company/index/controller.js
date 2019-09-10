import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  help: 'Showing all companies. If you want details about a company, please click it.',
  canShowModal: false,
  selectedCompany: null,
  title: 'Add new',

  actions: {
    didDelete(company) {
      set(this, 'canShowModal', true);
      set(this, 'selectedCompany', company);
    },

    confirmDelete(){
      this.selectedCompany.destroyRecord()
        .then(() => {
          set(this, 'canShowModal', false);
          get(this, 'notifications').showSuccess('One company has been removed');
        });
    },
    addCompany() {
      this.transitionToRoute('company.new');
    }
  }
});
