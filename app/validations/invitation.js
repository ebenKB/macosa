import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  firstname: [
    validatePresence(true),
    validateLength({min: 3}),
  ],

  lastname: [
    validatePresence(true),
  ],

  email: [
    validatePresence(true),
    validateFormat({ type: 'email' })
  ],

  is_admin: [
    validatePresence(true),
  ],
};
