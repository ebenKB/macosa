import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  full_name: [
    validatePresence(true),
    validateLength({min: 4}),
    validateFormat({ type: 'text'})
  ]
};
