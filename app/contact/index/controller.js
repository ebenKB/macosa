import Controller from '@ember/controller';

export default Controller.extend({
  help: 'Showing all contacts',
  title: 'Add New Contact',
  actions: {
    perform() {
      this.transitionToRoute('contact.new');
    }
  }
});
