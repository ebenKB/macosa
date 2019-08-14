import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  lastname: DS.attr(),
  firstname: DS.attr(),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  owner_id: DS.attr(),
  is_admin: DS.attr('boolean'),
  access_token: DS.attr('string'),

  fullname: computed('firstname', 'lastname', function() {
    return `${this.firstname} ${this.lastname}` ;
  }),
  initials: computed('firstname', 'lastname', function() {
    const partA = this.firstname.split('')[0].toUpperCase();
    const partB = this.lastname.split('')[0].toUpperCase();
    return `${partA} ${partB}`;
  }),

  isSelected: true,
});
