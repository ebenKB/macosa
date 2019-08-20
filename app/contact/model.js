import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  title: DS.attr('string'),
  company_id: DS.belongsTo('company'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  background: DS.attr('string'),

  // add a transient property to check whether the contact is selected or not
  isSelected: false,
  fullname: computed('firstname', 'lastname', function() {
    return `${this.firstname} ${this.lastname}`;
  }),

  initials: computed('firstname', 'lastname', function() {
    const partA = this.firstname.split('')[0].toUpperCase();
    const partB = this.lastname.split('')[0].toUpperCase();
    return `${partA} ${partB}`;
  }),
});
