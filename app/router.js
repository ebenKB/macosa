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

  this.route('invitation', { path: '/invitations'}, function() {
    this.route('confirm', { path: '/:token'});
  });

  // this.route('invitations', function() {
  //   this.route('confirm', { path: '/:token'});
  // });

  this.route('password', function() {
    this.route('reset');
    this.route('new', { path: '/:token'});
  });

  this.route('authenticated', { path: ''}, function() {
    this.route('user', {
      resetNamespace: true,
    });

    this.route('company', {
      resetNamespace: true,
    },function() {
      this.route('new');
      this.route('edit', { path: '/:id'});
    });

    this.route('order', {
      resetNamespace: true,
    }, function() {
      this.route('new');
    });
  });
  // this.route('user', function() {});

  // this.route('order', function() {
  //   this.route('new');
  // });
});

export default Router;