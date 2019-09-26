import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    console.log('this is the id of the compnay that we want to edit');
    return this.store.peekRecord('company', id);
  }
});
