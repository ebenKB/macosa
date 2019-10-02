import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import help from 'macosa/help/supplier-order/edit';

export default Controller.extend({
  changeset: null,
  didUpdateModel: false,
  isSaving: false,

  actions: {
    cancel() {
      this.transitionToRoute('supplier-order.index');
    },

    editOrder(changeset) {
      set(this, 'changeset', changeset);
      set(this, 'didUpdateModel', true);
    },

    confirmUpdate() {
      set(this, 'isSaving', true);
      set(this, 'didUpdateModel', false);
      if (this.changeset.get('isValid')) {
        get(this, 'changeset').save()
          .then(() => {
            set(this, 'isSaving', false);
            get(this, 'notifications').showSuccess('One record has been updated');
            this.transitionToRoute('supplier-order');
          })
          .catch(() => {
            set(this, 'isSaving', false);
            get(this, 'notifications').showError('error while updating record');
          });
      }
    },

    validate(changeset) {
      changeset.validate();
    }
  },
  init() {
    this._super();
    set(this, 'help', help);
    // set(this, 'manufacturers', get(this, 'store').findAll('manufacturer'));
  }
});

