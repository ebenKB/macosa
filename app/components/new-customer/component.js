import Component from '@ember/component';
import Changeset from 'ember-changeset';
import { get } from '@ember/object';
import $ from 'jquery';
import Ember from 'ember';
// import { inject as store } from 'ember/service';
import IndustryValidation from 'macosa/validations/industry';

export default Component.extend({
  // eslint-disable-next-line ember/new-module-imports
  store: Ember.inject.service(),
  // data: store(),
  IndustryValidation,
  isSaving: false,

  name: 'indust',
  didInsertElement() {
    $('.ui.custom-popup')
      .popup({
        on: 'click'
      });
  },
  actions: {
    perform() {
      get(this, 'perform')();
    },

    // createIndustry() {
    //   console.log('we want to create a new industry');
    // },

    cancel() {
      get(this, 'cancel')();
    },

    validate() {

    }
  },
  init() {
    this._super(...arguments);
    // const model = this.store.createRecord({ name: ''});
    // let validator = get(this, 'validate');
    // this.changeset = new Changeset(model, validator);
    // let changeset = new Changeset(model, validatorFn, validationMap, { skipValidate: false });
  }
});
