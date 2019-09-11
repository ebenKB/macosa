import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import ManagerValidations from 'macosa/validations/account-managers';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default Controller.extend({
  didAddManager: false,
  isSaving: false,
  help: 'You can add a new account manager by providing the full' +
    'name in the form. Click "Save when you are done" ',

  actions: {
    cancel() {
      this.transitionToRoute('account-manager.index');
    },
    perform() {
      set(this, 'isSaving', true);
      this._batchSave(this.managers)
        .then(() => {
          set(this, 'isSaving', false);
          get(this, 'notifications').showSuccess('Added new account manager');
          this.transitionToRoute('account-manager.index');
        })
        .catch(() => {
          set(this, 'isSaving', false);
          get(this, 'notifications').showError('Some records are not valid');
        });
    },

    newManagerForm() {
      const cursor = (get(this, 'managers').length - 1);
      const prev = this.managers[cursor];
      prev.validate()
        .then(() => {
          if (prev.get('isValid')) {
            get(this, 'managers').pushObject(this._createManager());
            this._didAddManager();
          }
        });
    },
    deleteManagerForm(manager) {
      if (get(this, 'managers').length > 1) {
        get(this, 'managers').removeObject(manager);
        this._didAddManager();
      }
    },
  },

  init() {
    this._super();
    // const manager = new get(this, 'store').createRecord('account-manager', {});
    // const changeset = new Changeset(manager, LookupValidator(ManagerValidations),
    //   ManagerValidations, { skipValidate: false});
    set(this, 'managers', [this._createManager()]);
  },

  _createManager() {
    const manager = get(this, 'store').createRecord('account-manager', {full_name: ''});
    const changeset = new Changeset(manager, lookupValidator(ManagerValidations),
      ManagerValidations, {skipValidate: false});
    changeset.validate();
    return changeset;
  },

  _didAddManager() {
    if (get(this, 'managers').length > 1) {
      set(this, 'didAddManager', true);
    } else {
      set(this, 'didAddManager', false);
    }
  },

  /**
   * save multiple records to the databse
   * @param {*} managers the account managers to save to the database
   */
  _batchSave(managers) {
    return new Promise((resolve, reject) => {
      try {
        for (const m of managers) {
          if (m.get('isValid')) {
            m.save();
          } else reject(false);
        }
        resolve(true);
      } catch (err){
        reject(false);
      }
    });
  }
});
