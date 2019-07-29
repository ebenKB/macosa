import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  help: 'View all customers',
  // // isMainForm: true,
  // actions: {
  //   newCustomer() {
  //     // set(this, 'isMainForm', false);
  //     set(this, 'help', 'If you want to revoke the action, please cancel');
  //     this.transitionToRoute('customer.new');
  //   },

  //   cancel() {
  //     // set(this, 'isMainForm', true);
  //     this.transitionToRoute('customer');
  //   }
  // }
});
