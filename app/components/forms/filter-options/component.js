import Component from '@ember/component';
import $ from 'jquery';
import { get } from '@ember/object';

export default Component.extend({
  // title: 'Filter options',
  key: '',
  default: 'selected',
  title: 'all users',
  isLoading: false,
  type: '',

  actions: {
    didClick(option) {
      get(this, 'didClick')(option);
    },

    didSelect() {

    },
    didSelectItem(item, type) {
      get(this, 'didSelectItem')(item, type);
    }
  },
  didInsertElement() {
    $('.mc-popup ')
      .popup({
        on: 'click',
        // position: 'bottom center',
      });
  },
});
