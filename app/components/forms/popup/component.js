import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    $('.mc-popup ')
      .popup({
        on: 'click'
      });
  }
});
