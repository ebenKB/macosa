import Controller from '@ember/controller';

export default Controller.extend({
  title: 'Add new',
  actions: {
    addCompanyType() {
      this.transitionToRoute('type.new');
    }
  }
});
