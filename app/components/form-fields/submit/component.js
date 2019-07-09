import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  title: '',
  actions: {
    perform(changeset, e) {
      e.preventDefault();
      get(this, 'perform')(changeset);
    }
  }
});
