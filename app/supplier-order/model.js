import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model } = DS;
export default Model.extend({
  amount: DS.attr('number'),
  manufacturer_id: DS.belongsTo('manufacturer', { async: true}),
  order_id: DS.belongsTo('order', { async: true}),
  order_date: DS.attr('mydate'),
  description: DS.attr('string'),
  comments: DS.attr('string'),

  // eta - estimated time of arrival
  eta: DS.attr('mydate'),
  delivered: DS.attr('boolean'),
  summary: computed('description', function() {
    if (this.description !== null) {
      return `${this.description.split(' ').splice(0, 40).join(' ')}`;
    }
  }),

  // add a transient property to track the state of the model
  is_deleted: false
});
