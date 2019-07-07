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
              name: 'Add new purchase',
              link: 'company.new',
            }
          ]
        },
        {
          name: 'Marketing',
          submenus: [
            {
              name: 'New Sales',
              link: 'company.new',
            }
          ]
        }
      ]
    );
  }
});
