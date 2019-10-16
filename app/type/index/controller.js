import Controller from '@ember/controller';

export default Controller.extend({
  title: 'Add new',
  actions: {
    addCompanyType() {
      console.log('we want to add a company type');
    }
  }
});
