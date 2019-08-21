import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  title: 'Filter options',
  didInsertElement() {
    $('.mc-popup ')
      .popup({
        on: 'click'
      });
  },
});
