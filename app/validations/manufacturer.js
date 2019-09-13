import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true),
    validateLength({min: 3}),
    validateFormat({ type: 'text'})
  ]
};
