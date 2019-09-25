import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  user_id: DS.attr('string'), // the user who performed the action
  trackable_type: DS.attr('string'), // the model that performed the action
  owner_type: DS.attr('string'),
  owner_id: DS.attr('string'),
  key: DS.attr('string'), // the model and the action performed on the model
  recipient_type: DS.attr('string'), // the name of the model on which the action was performed
  recipient_id: DS.attr('string'),
});
