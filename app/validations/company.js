import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true),
    validateLength({min: 3}),
  ],
  phone: [
    validatePresence(true),
  ]
};


// name: DS.attr('string'),
// phone: DS.attr('string'),
// email: DS.attr('string'),
// website: DS.attr('string'),
// address: DS.attr('string'),
// company_type: DS.attr('string'),
// background: DS.attr('string')