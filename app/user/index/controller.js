import Controller from '@ember/controller';
import { set,get } from '@ember/object';

export default Controller.extend({
  check: false,
  didAttemptDelete: false,

  title: 'Invite a new user',
  help: 'All registerd users are displayed here',
  actions: {
    perform() {
      console.log('you want to perfom an action');
      this.transitionToRoute('signup.invitation');
    },

    updateUser(user) {
      this.toggleProperty('check');
      if (this.check === true) {
        set(user, 'is_admin', true);
        // user.save();
        console.log('this is the user', user);
      } else {
        set(user, 'is_admin', false);
        console.log('ELSE this is the user', get(user, 'is_admin'));
      }
      user.save();
    },

    attemptDelete() {
      set(this, 'didAttemptDelete', true);
    },

    cancelDelete(){
      set(this, 'didAttemptDelete', false);
    },

    deleteUser(user) {
      console.log('you have deleted the user');
    },

    destroyUser(user) {
      console.log('you have destroyed the user');
      user.destroyRecord();
    }
  }
});
