import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('this is the authenticated route');
  }
});
