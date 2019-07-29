import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    $('.action')
      .popup({
        on: 'click'
      });
  }
});
