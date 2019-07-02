import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    phone: DS.attr('string'),
    email: DS.attr('string'),
    website: DS.attr('string'),
    address: DS.attr('string'),
    company_type: DS.attr('string'),
    background: DS.attr('string')
});
