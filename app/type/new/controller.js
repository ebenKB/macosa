import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import Changeset from 'ember-changeset';
import TypeValidation from 'macosa/validations/type';
import lookupValidator from 'ember-changeset-validations';

export default Controller.extend({
  TypeValidation,
  didAddForm: false,
  isSaving: false,

  help: 'You can create multiple company types and save them at once.',
  actions: {
    perform() { // save records to the database
      const obj = this;
      set(this, 'isSaving',true);
      this._batchSave(this.types)
        .then(() => {
          set(obj, 'isSaving', false);
          get(obj, 'notifications').showSuccess('Added new company types');
          obj.transitionToRoute('type.index');
        });
    },

    // take the user back to the main page
    cancel() {
      this.transitionToRoute('type.index');
    },

    /**
     * delete an existing form from the user interface
     * @param {*} form the form to delete
     */

    deleteTypeForm(form) {
      if (get(this, 'types').length > 1) {
        get(this, 'types').removeObject(form);
        this._didAddForm();
      }
    },

    /**
     * add a new form for the user to add a new company type
     * Before a new is added, check to make sure that the existing forms are valid and not empty before allowing the user add a new form
     */
    newTypeForm() {
      const cursor = (get(this, 'types').length - 1);
      const prev = this.types[cursor];
      prev.validate()
        .then(() => {
          if (prev.get('isValid')) {
            const type = new Changeset(get(this, 'store').createRecord('type', {}),
              lookupValidator(TypeValidation), TypeValidation, {skipValidate: false});
            get(this, 'types').pushObject(type);
            this._didAddForm();
          } else {
            get(this, 'notifications').showError('Please complete the empty fields');
          }
        });
    }
  },

  _didAddForm() {
    if (get(this, 'types').length > 1) {
      set(this, 'didAddForm', true);
    } else {
      set(this, 'didAddForm', false);
    }
  },

  /**
   * perform a batch save
   * @param {*} types the company types that we want to save to the database
   * returns true if all the records were saved successfully other returns false if saving any of the records fails.
   */
  _batchSave(types){
    return new Promise((resolve, reject) => {
      try {
        for (const t of types) {
          t.save();
        }
        resolve(true);
      } catch (err){
        reject(false);
      }
    });
  },
  init() {
    this._super();
    const type = new Changeset(get(this, 'store').createRecord('type', {name: ''}),
      lookupValidator(TypeValidation), TypeValidation);
    set(this, 'types', [type]);
  }
});
