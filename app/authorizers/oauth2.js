import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
import { inject as service } from '@ember/service';

export default OAuth2Bearer.extend({
  session: service(),
})