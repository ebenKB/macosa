import Controller from '@ember/controller';
import { set,get } from '@ember/object';

export default Controller.extend({
  check: false,

  title: 'Invite a new user',
  help: 'All registerd users are displayed here',
  actions: {
    perform() {
      console.log('you want to perfom an action');
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

    deleteUser() {
      console.log('you want to delete a user');
    },
  }
});
