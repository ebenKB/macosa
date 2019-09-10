import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  session: service('session'),
  isSaving: false,

  actions: {
    cancel() {
      // remove the customer object from the data store and go back the index
      get(this, 'model').customer.deleteRecord();
      this.transitionToRoute('customer');
    },

    async perform(changeset) {
      set(this, 'isSaving', true);
      const industry = await get(this, 'store')
        .peekRecord('industry', get(changeset, 'industry_id'));
      set(changeset, 'industry_id', industry);
      changeset.save()
        .then(() => {
          set(this, 'isSaving', false);
          this.transitionToRoute('customer');
        });
    }
  },
});
