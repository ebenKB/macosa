import Controller from '@ember/controller';

export default Controller.extend({
  help: 'Showing all orders for Apotica Company Limited.',
  title: 'Add new order',
  queryParams: ['user_id', 'account_manager_id'],
  user_id: 3,
  account_manager_id: 1,
  actions: {
    perform(){
      this.transitionToRoute('order.new');
    }
  }
});
