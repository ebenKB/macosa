import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
  this.route('login');
  this.route('signup', function() {
    this.route('invitation');
  });


  this.route('authenticated', {path: '', function() {
    // this.route('user', { resetNamespace: true },
    //   function() {});
  }});

  this.route('company', function() {
    this.route('new');
  });

  this.route('invitation', function() {
    this.route('confirm', { path: '/:token'});
  });
  this.route('user', function() {});
});

export default Router;
