import Component from '@ember/component';
import { get, set } from '@ember/object';
import Changeset from 'ember-changeset';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  role: 'save',
  property: 'name',
  type: 'text',
  placeholder: 'Enter item name',
  classNames: '',
  changesetObj: null,
  model: 'business_unit',
  actions: {
    validate() {
      console.log('');
    },

    perform() {
      if (get(this, 'changesetObj').isValid) {
        this.changesetObj.save();
        console.log('it is valid', this.changesetObj);
      } else console.log('not valid changeset');
    },

    initPopUp(model) {
      if (model == 'business_unit') {
        const unit = this.store.createRecord('business_unit', { name: '' });
        set(this, 'changesetObj', new Changeset(unit, { skipValidate: false }));
      }
    }
  },
  didInsertElement() {
    $('.mc-popup ')
      .popup({
        on: 'click'
      });
  },
});
