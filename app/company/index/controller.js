import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import SoftDelete from 'macosa/util/deleteModel';
import Token from 'macosa/util/token';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  help: 'Showing all companies. If you want details about a company, please click it.',
  didAttemptDelete: false,
  isSaving: false,
  selectedCompany: null,
  canPreviewCompany: true,
  title: 'Add new',

  actions: {
    didDelete(company) {
      set(this, 'didAttemptDelete', true);
      set(this, 'selectedCompany', company);
    },

    confirmDelete(){
      set(this, 'isSaving', true);
      const { id } = get(this, 'selectedCompany');
      const token = Token.getToken(this.session);
      SoftDelete.softDelete('companies',id, token)
        .then(() => {
          set(this.selectedCompany, 'is_deleted', true);
          set(this, 'didAttemptDelete', false);
          set(this, 'isSaving', false);
          get(this, 'notifications').showSuccess('One item has been removed');
        });
      // this.selectedCompany.destroyRecord()
      //   .then(() => {
      //     set(this, 'canShowModal', false);
      //     get(this, 'notifications').showSuccess('One company has been removed');
      //   });
    },
    addCompany() {
      this.transitionToRoute('company.new');
    }
  }
});
