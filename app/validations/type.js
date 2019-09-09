import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true),
    validateLength({min: 4}),
    validateFormat({ type: 'text'})
  ]
};
