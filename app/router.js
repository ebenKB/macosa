import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', {path: '/'});
  this.route('login');

  this.route('user', function() {});
  this.route('signup', function() {
    this.route('invitation');
  });
  this.route('company', function() {
    this.route('new');
  });
});

export default Router;
