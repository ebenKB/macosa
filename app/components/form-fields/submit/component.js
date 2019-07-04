import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  title: '',
      actions: {
          action() {
              get(this, 'action')();
          }
      }
});
