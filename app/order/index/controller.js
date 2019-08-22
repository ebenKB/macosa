import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  queryParams: ['user_id', 'company_id', 'account_manager_id', 'currency_id'],
  userTitle: 'all users',
  companyTitle: 'all comapnies',
  managerTitle: 'all managers',
  currencyTitle: 'all currencies',
  isLoading: false,
  users: null,
  companies: null,
  managers: null,
  currencies: null,
  help: 'Showing all orders for Apotica Company Limited.',
  title: 'Add new order',
  user_id: null,
  account_manager_id: null,
  company_id: null,
  currency_id: null,

  actions: {
    perform(){
      this.transitionToRoute('order.new');
    },

    didSelectItem(item, type) {
      if (type === 'user') {
        set(this, 'user_id', item.id);
        set(this, 'userTitle', item.fullname);
      } else if (type === 'company') {
        set(this, 'company_id', item.id);
        set(this, 'companyTitle', item.name);
      } else if (type === 'account_manager') {
        set(this, 'account_manager_id', item.id);
        set(this, 'managerTitle', item.full_name);
      } else if (type === 'currency') {
        set(this, 'currency_id', item.id);
        set(this, 'currencyTitle', item.name);
      }
    },

    didInit(type) {
      // load user records
      if (type === 'user' && this.users === null) {
        set(this, 'isLoading', true);
        get(this, 'store').findAll('user')
          .then((data) => {
            set(this, 'users', data);
            set(this, 'isLoading', false);
          });
      } else if (type === 'company' && this.companies === null) {
        // load company records
        set(this, 'isLoading', true);
        get(this, 'store').findAll('company')
          .then((data) => {
            set(this, 'companies', data);
            set(this, 'isLoading', false);
          });
      } else if (type === 'account_manager' && this.managers === null) {
        // load account managers
        set(this, 'isLoading', true);
        get(this, 'store').findAll('account-manager')
          .then((data) => {
            set(this, 'managers', data);
            set(this, 'isLoading', false);
          });
      } else if (type === 'currency' && this.currencies === null) {
        // load account currecies
        set(this, 'isLoading', true);
        get(this, 'store').findAll('currency')
          .then((data) => {
            set(this, 'currencies', data);
            set(this, 'isLoading', false);
          });
      }
    },
  }
});
