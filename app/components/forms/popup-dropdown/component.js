import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  title: 'Add new',

  actions: {
    initPopUp() {
      console.log('we can init the pop up');
    }
  },
  didInsertElement() {
    $('.mc-popup')
      .popup({
        on: 'click',
        position: 'top center',
      });
  },
});
