import Controller from '@ember/controller';
import { set,get } from '@ember/object';
import SoftDelete from 'macosa/util/deleteModel';
import {inject as service} from '@ember/service';
import Token from 'macosa/util/token';

export default Controller.extend({
  session: service(),
  // check: false,
  didAttemptDelete: false,
  isSaving: false,
  selectedUser: null,

  title: 'Invite user',
  help: 'All registerd users are displayed here',
  actions: {
    perform() {
      this.transitionToRoute('signup.invitation');
    },

    updateUser(user) {
      const status = get(user, 'is_admin');
      set(user, 'is_admin', !status);

      const timer = setTimeout(() => {
        if (get(user, 'hasDirtyAttributes')) {
          user.save()
            .then(() => {
              clearTimeout(timer);
            });
        }
      }, 3000);
    },

    didAttemptDelete(user) {
      set(this, 'didAttemptDelete', true);
      set(this, 'selectedUser', user);
    },

    confirmDelete() {
      set(this, 'isSaving', true);
      const token = Token.getToken(this.session);
      const { id } = get(this, 'selectedUser');

      SoftDelete.softDelete('users', id, token)
        .then(() => {
          set(this, 'didAttemptDelete', false);
          set(this, 'isSaving', false);
          set(this.selectedUser, 'is_deleted', true);
          get(this, 'notifications').showSuccess('One record has been archived');
        })
        .catch(() => {
          set(this, 'isSaving', false);
          set(this, 'didAttemptDelete', false);
          get(this, 'notifications').showError('An error occured while removing the record');
        });
    },

    cancelDelete(){
      set(this, 'didAttemptDelete', false);
    },

    deleteUser(user) {
      console.log('you have deleted the user', user);
    },

    destroyUser(user) {
      user.destroyRecord();
    }
  },
});
