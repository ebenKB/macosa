import Controller from '@ember/controller';

export default Controller.extend({
  help: 'Showing all orders for Apotica Company Limited.',
  title: 'Add new order',
  actions: {
    perform(){
      console.log('you want to perform');
    }
  }
});
