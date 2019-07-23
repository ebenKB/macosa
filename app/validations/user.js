import {
  validatePresence,
  validateLength,
  // validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  password: [
    validatePresence(true),
    validateLength({min: 4}),
  ],

  email: [
    validatePresence(true),
    validateLength({min: 3})
  ],

  phone: [
    validateFormat({ type: 'phone' }),
  ],

  password_confirmation: [
    validatePresence(true),
    validateLength({min: 4})
  ],

  access_token: [
    validatePresence(true),
    validateLength({min: 8})
  ]
};
