import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import CustomerValidation from 'macosa/validations/customer';


export default Controller.extend({
  session: service('session'),

  actions: {
    cancel() {
      console.log(this.get('session'));
      this.transitionToRoute('customer');
    },
    perform(changeset) {
      console.log('this is the changeset we are trying to save', changeset);
      changeset.save();
    }
  }
});
