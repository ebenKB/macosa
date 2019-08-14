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
    validateLength({min: 3}),
  ]
};
