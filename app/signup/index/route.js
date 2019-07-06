import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('owner', {
      name: '', // name of the company the owner belongs to
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      website: '',
    });
  }
});
