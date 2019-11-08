import Controller from '@ember/controller';
import ContactValidation from 'macosa/validations/contact';
import { get,set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import help from 'macosa/help/contact/new';

export default Controller.extend({
  help: 'If you want to add multiple contacts, click on Add more to add new fields ',
  isSaving: false,
  saveCompleted: false,
  didAddContact: false,
  // ContactValidation,

  actions: {
    perform() {
      // this.transitionToRoute('contact.new');
      set(this, 'isSaving', true);
      get(this, 'contacts').map((contact) => {
        // set the company for the contact
        const id = get(contact, 'company_id');
        if (id) {
          const company = get(this, 'store').peekRecord('company', id);
          set(contact, 'company_id', company);
        }
        if (get(contact, 'isValid')) {
          return contact.save()
            .then(() => {
              set(this, 'isSaving', false);
              set(this, 'saveCompleted', true);
              const msg = 'Success! You added a new contact';
              this.get('notifications').showSuccess(msg);
            });
        } else {
          this.get('notifications').showError('Please complete all fields');
          set(this, 'saveCompleted',false);
          set(this, 'isSaving', false);
          return null;
        }
      });
      if (this.saveCompleted) {
        this.transitionToRoute('contact');
      }
    },
    cancel() {
      // get(this, 'model').deleteRecord();
      // get(this, 'contact').deleteRecord();
      this.transitionToRoute('contact.index');
    },

    newContactForm() {
      const contact = get(this, 'store').createRecord('contact', {});
      const changeset = new Changeset(contact, lookupValidator(ContactValidation),
        ContactValidation, { skipValidation: false});
      changeset.validate();
      get(this, 'contacts').pushObject(changeset);

      // show the option to delete contact form
      if (this.contacts.length > 0) {
        set(this, 'didAddContact', true);
      } else {
        set(this, 'didAddContact', true);
      }
    },

    deleteContactForm(contact) {
      if (get(this, 'contacts').length > 1) {
        get(this, 'contacts').removeObject(contact);
        get(this, 'store').deleteRecord(contact); // delete the contact from the data store
      }
    }
  },
  init() {
    this._super();
    set(this, 'titles', [
      {name: 'Mr', id: 'Mr'},
      {name: 'Mrs', id: 'Mrs'},
      {name: 'Miss', id: 'Miss'}
    ]);

    // create empty changeset object
    const changesetObj = [];
    const contact = get(this, 'store').createRecord('contact', {});
    const changeset = new Changeset(contact, lookupValidator(ContactValidation),
      ContactValidation, { skipValidation: false});
    changeset.validate();
    changesetObj.pushObject(changeset);
    set(this, 'contacts', changesetObj);

    // set companies
    set(this, 'companies', get(this, 'store').findAll('company'));
    set(this, 'help', help);
  }
});
