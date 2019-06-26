import Component from '@ember/component';
import { set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    $('.ui.accordion').accordion({ "exclusive": true});
  },

 options : null,
  init() {
    this._super(...arguments);
    set(this, 'options', ['Human Resource', 'Marketing', 'Production',])
  }
});
