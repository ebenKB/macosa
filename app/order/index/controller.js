import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import OrderValidations from 'macosa/validations/order';

export default Controller.extend({
  OrderValidations,
  // queryParams: ['user_id', 'customer_id', 'account_manager_id', 'currency_id'],
  queryParams: ['page'],
  page: 1,
  userTitle: 'all users',
  customerTitle: 'all comapnies',
  managerTitle: 'all managers',
  currencyTitle: 'all currencies',
  isLoading: false,
  users: null,
  customers: null,
  managers: null,
  currencies: null,
  help: 'Showing all orders for Apotica Company Limited.',
  title: 'Add new order',
  user_id: null,
  account_manager_id: null,
  customer_id: null,
  currency_id: null,
  selectedorder: null,
  ifCanShowOrder: false,

  actions: {
    perform(){
      this.transitionToRoute('order.new');
    },

    next() {
      set(this, 'page', (get(this, 'page') + 1));
      console.log(get(this, 'page'));
    },

    previous() {
      set(this, 'page', (get(this, 'page') - 1));
      console.log(get(this, 'page'));
    },
    didSelectItem(item, type) {
      if (type === 'user') {
        set(this, 'user_id', item.id);
        set(this, 'userTitle', item.fullname);
      } else if (type === 'customer') {
        set(this, 'customer_id', item.id);
        set(this, 'customerTitle', item.name);
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
      } else if (type === 'customer') {
        // load customer records
        set(this, 'isLoading', true);
        this.getCustomers()
          .then(() => set(this, 'isLoading', false));
      } else if (type === 'account_manager') {
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
    sortItem(key) {
      console.log('we want to sort item by key:', key);
    },

    didSelectOrder(order) {
      set(this, 'selectedOrder', order);
      set(this, 'canShowOrder', true);
      this.getManagers();
      this.getCustomers();
    },
    cancelEdit() {
      set(this, 'canShowOrder', false);
    }
  },
  init() {
    this._super();
    set(this, 'sortOptions', [
      {
        name: 'Newest to Oldest',
        key: 1
      },
      {
        name: 'Oldest to Newest',
        key: -1,
      }
    ]);
  },

  getManagers(){
    return new Promise((resolve, reject) => {
      if (this.managers === null) {
        get(this, 'store').findAll('account-manager')
          .then((data) => {
            set(this, 'managers', data);
            set(this, 'isLoading', false);
            resolve(true);
          })
          .catch((err) => reject(err));
      } else resolve(true);
    });
  },
  getCustomers() {
    return new Promise((resolve, reject) => {
      if (this.customers === null) {
        get(this, 'store').findAll('customer')
          .then((data) => {
            set(this, 'customers', data);
            set(this, 'isLoading', false);
            resolve(true);
          })
          .catch((err) => reject(err));
      } else resolve(true);
    });
  }
});
