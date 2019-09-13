import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true),
    validateLength({min: 3}),
  ],
  amount: [
    validatePresence(true),
  ]
};
