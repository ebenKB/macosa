import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  help: 'Showing all contacts',
  title: 'Add New Contact',
  didSelect: false,
  actions: {
    perform() {
      this.transitionToRoute('contact.new');
    },
    didSelectContact(contact) {
      if (contact !== undefined && contact != null) {
        if (get(contact, 'isSelected')) {
          set(contact, 'isSelected', false);
          // remove the contact from the selected contacts
          this.selectedContacts.removeObject(contact);
        } else {
          set(contact, 'isSelected', true);
          this.selectedContacts.addObject(contact);
        }
      }

      // check if the user has selected any contacts
      if (this.selectedContacts.length > 0) {
        set(this, 'didSelect', true);
      } else {
        set(this, 'didSelect', false);
      }
    },
    deleteContacts(){
      console.log('we want to delete contacts');
    }
  },

  init() {
    this._super();
    set(this, 'selectedContacts', []);
  }
});
