import Controller from '@ember/controller';

export default Controller.extend({
  title: 'Invite a new user',
  help: 'All registerd users are displayed here',
  actions: {
    perform() {
      console.log('you want to perfom an action');
    }
  }
});
