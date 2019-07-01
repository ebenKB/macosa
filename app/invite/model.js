import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  status: attr('string'),
  accountName: attr('string'),
  roles: attr()
});
