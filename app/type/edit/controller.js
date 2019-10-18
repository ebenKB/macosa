import Controller from '@ember/controller';
import TypeValidation from 'macosa/validations/type';
import { get, set } from '@ember/object';

export default Controller.extend({
  TypeValidation,
  isSaving: false,
  actions: {
    perform(changeset) {
      set(this, 'isSaving', true);
      changeset.save()
        .then(() => {
          set(this, 'isSaving', false);
        })
    },
    cancel() {
      this.transitionToRoute('type.index');
    }
  }
});
