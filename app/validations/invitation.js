import {
  validatePresence,
  validateLength,
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
  ],
  is_admin: [
    validatePresence(true),
  ]
};
