import Controller from '@ember/controller';

export default Controller.extend({
  help: 'Showing all orders for Apotica Company Limited.',
  title: 'Add new order',
  actions: {
    perform(){
      this.transitionToRoute('order.new');
    }
  }
});
