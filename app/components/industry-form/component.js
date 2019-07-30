import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Component.extend({
  store: service('store'),
  name: '',

  actions: {
    validate() {
      // validate here
    },
    createIndustry() {
      const industry = this.store.createRecord('industry', { name: this.name });
      industry.save()
        .then(() => set(this, 'name', ''));
    }
  },
  _isValid() {
    return this.name.length > 3;
  }
});
