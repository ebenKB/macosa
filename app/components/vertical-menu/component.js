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
          name: 'Company',
          submenus: [
            {
              name: 'Add new Company',
              link: 'company.new',
            },
            {
              name: 'View Companies',
              link: 'company.index',
            },
            {
              name: 'View Types',
              link: 'type.index',
            },
            {
              name: 'New Comapny type',
              link: 'type.new',
            },
          ]
        },
        {
          name: 'Contact',
          submenus: [
            {
              name: 'All contacts',
              link: 'contact.index'
            },
          ]
        },
        {
          name: 'Customers',
          submenus: [
            {
              name: 'All customers',
              link: 'customer.index'
            }
          ]
        },
        {
          name: 'Customer Orders',
          submenus: [
            {
              name: 'Add new order',
              link: 'order.new',
            },
            {
              name: 'View orders',
              link: 'order.index',
            },
            {
              name: 'Business unit orders',
              link: 'business-unit-order.index',
            },
            {
              name: 'Manufacturer orders',
              link: 'manufacturer-order.index',
            }
          ]
        },
        {
          name: 'Supplier Orders',
          submenus: [
            {
              name: 'View all',
              link: 'supplier-order.index',
            }
          ]
        },
        {
          name: 'Manage Account',
          submenus: [
            {
              name: 'New Account Manager',
              link: 'account-manager.new',
            }
          ]
        },
        {
          name: 'Graphs',
          submenus: [
            {
              name: 'Orders',
              link: 'graph.order'
            },
          ]
        }
      ]
    );
  }
});
