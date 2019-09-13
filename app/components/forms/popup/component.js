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

    },

    perform() {
      console.log('we are calling master to come and perform');
      // if (get(this, 'changesetObj').isValid) {
      //   // this.changesetObj.save();
      //   console.log('the changeset is valid');
      // } else {
      //   console.log('the changeset is not valid');
      // }
      get(this, 'perform')();
    },

    initPopUp(model) {
      console.log('we are calling master to init the pop up');
      get(this, 'initPopUp')();
      // if (model === 'business_unit') {
      //   const unit = this.store.createRecord('business_unit', { name: '' });
      //   set(this, 'changesetObj', new Changeset(unit, { skipValidate: false }));
      // } else if (model === 'manufacturer') {
      //   const manufactuer = get(this, 'store').createRecord('manufacturer', {name: ''});
      //   set(this, 'changesetObj', new Changeset(manufactuer, { skipValidate: false }));
      // }
    }
  },

  didInsertElement() {
    $('.mc-popup')
      .popup({
        on: 'click',
        position: 'top center',
      });
  },
});
