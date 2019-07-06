import {
  validatePresence,
  validateLength,
  // validateConfirmation,
  // validateFormat
} from 'ember-changeset-validations/validators';

export default {
  password: [
    validatePresence(true),
    validateLength({min: 4}),
  ],

  email: [
    validatePresence(true),
    validateLength({min: 3})
  ]
};
