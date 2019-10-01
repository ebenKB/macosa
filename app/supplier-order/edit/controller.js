import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  changeset: null,
  didUpdateModel: false,
  isSaving: false,

  actions: {
    cancel() {
      console.log('we want to cancel the edit');
    },

    editOrder(changeset) {
      set(this, 'changeset', changeset);
      set(this, 'didUpdateModel', true);
    },

    confirmUpdate() {
      set(this, 'isSaving', true);
      set(this, 'didUpdateModel', false);
      get(this, 'changeset').save()
        .then(() => {
          set(this, 'isSaving', false);
        })
        .catch(() => set(this, 'isSaving', false));
    },

    validate() {
      console.log('we want to validate the order');
    }
  },
  init() {
    this._super();
    // set(this, 'manufacturers', get(this, 'store').findAll('manufacturer'));
  }
});

