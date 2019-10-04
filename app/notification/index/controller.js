import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import help from 'macosa/help/notification/help';

export default Controller.extend({
  userTitle: 'everyone',
  queryParams: ['user_id'],
  user_id: null,
  filterTitle: 'filters',
  actions: {
    didInit() {
      console.log('in the init');
    },

    didSelectItem(user) {
      set(this, 'user_id', get(user, 'id'));
      set(this, 'userTitle', get(user, 'fullname'));
    },

    resetFilters() {
      set(this, 'user_id', null);
      set(this, 'userTitle', 'everyone');
    }
  },

  init() {
    this._super();
    set(this, 'help', help);
    set(this, 'users', get(this, 'store').findAll('user'));
  }
});
