import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  is_selected: false,
  initials: computed('full_name', function() {
    if (this.full_name == '' || this.full_name == null || this.full_name == undefined) {
      return 'N/A';
    } else {
      const namePartA = this.full_name.split(' ')[0];
      const namePartB = this.full_name.split(' ')[1];

      const partA = namePartA.split('')[0].toUpperCase();
      const partB = namePartB.split('')[0].toUpperCase();
      return `${partA} ${partB}`;
    }
  }),
});
