import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model } = DS;

export default Model.extend({
  amount: DS.attr('number'),
  manufacturer_id: DS.belongsTo('manufacturer'),
  order_id: DS.belongsTo('order'),
  order_date: DS.attr('mydate'),
  description: DS.attr('string'),
  comment: DS.attr('string'),

  // etoa - estimated time of arrival
  eta: DS.attr('mydate'),
  delivered: DS.attr('boolean'),

  summary: computed('description', function() {
    if (this.description !== null) {
      return `${this.description.split(' ').splice(0, 40).join(' ')}`;
    }
  }),
});
