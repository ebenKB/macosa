import Route from '@ember/routing/route';

export default Route.extend({
  model({param}){
    console.log('this is the param', param);
    return null;
  }
});
