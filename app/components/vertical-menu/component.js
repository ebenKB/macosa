import Component from '@ember/component';
import { set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({

  didInsertElement() {
    $('.ui.accordion').accordion({ 'exclusive': true});
  },

  options: null,
  init() {
    this._super(...arguments);
    set(this, 'menus',
      [
        {
          name: 'Macosa',
          submenus: [
            {
              name: 'Add new Company',
              link: 'company.new',
            },
            {
              name: 'View Companies',
              link: 'company',
            },
            {
              name: 'Contacts',
              link: 'contact',
            },
            {
              name: 'Customers',
              link: 'customer'
            }
          ]
        },
        {
          name: 'Orders',
          submenus: [
            {
              name: 'View orders',
              link: 'order',
            },
            {
              name: 'New order',
              link: 'order.new',
            }
          ]
        },
      ]
    );
  }
});
