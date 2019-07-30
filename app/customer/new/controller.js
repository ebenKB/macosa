import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import CustomerValidation from 'macosa/validations/customer';


export default Controller.extend({
  session: service('session'),

  actions: {
    cancel() {
      console.log(this.get('session'));
      this.transitionToRoute('customer');
    },
    async perform(changeset) {
      const industry = await get(this, 'store')
        .peekRecord('industry', get(changeset, 'industry_id'));
      set(changeset, 'industry_id', industry);
      changeset.save()
        .then(() => this.transitionToRoute('customer'));
    }
  },
});
