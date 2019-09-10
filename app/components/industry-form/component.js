import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
  store: service('store'),
  name: '',
  isSaving: false,
  session: service('session'),

  actions: {
    validate() {
      // validate here
    },
    createIndustry() {
      set(this, 'isSaving', true);
      const industry = this.store.createRecord('industry', { name: this.name });
      industry.save()
        .then(() => {
          set(this, 'name', '');
          set(this, 'isSaving', false);
        }).catch(() => {
          // console.log(err);
        });
    }
  },

  _isValid() {
    return this.name.length > 3;
  }
});
