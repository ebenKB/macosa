import Component from '@ember/component';
import { get,set } from '@ember/object';
import { inject as service} from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  store: service(),
  identifier: '',
  relatedBy: '',
  changeset: null,
  changesetObj: null,
  amount: null,
  property: 'amount',
  default: 'USD',
  placeholder: 'Select an item',
  key: '',
  options: '',
  actions: {
    validate() {
      get(this, 'validate')();
    },
    // observe the dropdown for changes and then set the object to the changeset
    setValue(id) {
      const unit = this.store.peekRecord(this.identifier, id);
      set(this, `changesetObj.${this.relatedBy}`, unit);
    }
  },
});
