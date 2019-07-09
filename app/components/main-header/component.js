import Component from '@ember/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
  session: service(),

  didInsertElement() {
    $('.ui.dropdown').dropdown();
  },

  actions: {
    logout() {
      get(this, 'session').invalidate();
    }
  }
});
