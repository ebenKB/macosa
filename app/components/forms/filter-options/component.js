import Component from '@ember/component';
import $ from 'jquery';
import { get } from '@ember/object';

export default Component.extend({
  // title: 'Filter options',
  key: '',
  classNames: null,
  default: 'selected',
  title: 'all users',
  hasDefault: true,
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
    },

    setDefault() {
      // console.log('we want to set the default');
      get(this, 'performDefault')();
    }
  },
  didInsertElement() {
    $('.mc-popup ')
      .popup({
        on: 'click',
        exclusive: true,
        transition: 'slide up',
        position: 'bottom center',
      });
  },
});
