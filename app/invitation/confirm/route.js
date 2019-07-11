import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model({ token }) {
    console.log('this is the token', token);
    // return get(this, 'store').findRecord('invitation', id);
    return get(this, 'store').createRecord('invitation', {
      name: 'Apotica',
      email: 'example@email.com',
      firstname: 'Ebenezer',
      lastname: 'Adjei',
    });
  }
});