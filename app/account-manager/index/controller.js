import Controller from '@ember/controller';
import { get, set} from '@ember/object';
import SoftDelete from 'macosa/util/deleteModel';
import Token from 'macosa/util/token';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),
  didSelect: false,
  didAttemptDelete: false,
  alertMessage: null,
  deleteCounter: 0,
  error: '',
  actions: {
    perform() {
      console.log('we want to perfrom an action');
    },

    didSelectAccount(account) {
      const isSelect = get(account, 'is_selected');
      set(account, 'is_selected', !isSelect);

      //add or remove it from the container
      if (get(account, 'is_selected')) {
        this.selectedAccounts.pushObject(account);
      } else {
        this.selectedAccounts.removeObject(account);
      }

      // check if there are still some items in the container
      if (get(this, 'selectedAccounts').length > 0) {
        set(this, 'didSelect', true);
      } else {
        set(this, 'didSelect', false);
      }
    },
    deleteAccounts() {
      set(this, 'didAttemptDelete', true);
      set(this, 'alertMessage', `Are you sure you want to remove ${this.selectedAccounts.length} account(s)?`);
    },

    confirmDelete() {
      const token = Token.getToken(this.session);
      for (const account of this.selectedAccounts) {
        const { id } = account;
        this.deleteCounter += 1;
        SoftDelete.softDelete('account_managers', id, token)
          .then(() => {
            // this.deleteCounter += 1;
            set(account, 'is_deleted', true);
            this.selectedAccounts.removeObject(account);
          })
          .catch(() => {
            this.deleteCounter -= 1;
            set(this, 'error', 'an error occured while removing the record');
          });
      }
      if (this.deleteCounter > 0) {
        //notify the user
        get(this, 'notifications').showSuccess(`${this.deleteCounter} items have been removed`);
      } else {
        get(this, 'notifications').showError('sorry an error ocurred while removing the record');
        set(this, 'didAttemptDelete', false);
      }
    }
  },

  init() {
    this._super();
    set(this, 'selectedAccounts', []);
  }
});
