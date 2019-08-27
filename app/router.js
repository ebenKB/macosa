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

  this.route('password', function() {
    this.route('reset');
    this.route('new', { path: '/:token'});
  });

  this.route('authenticated', { path: ''}, function() {
    this.route('user', {
      resetNamespace: true,
      path: '/users'
    }, function() {
      this.route('new');
    });

    this.route('company', {
      resetNamespace: true,
    },function() {
      this.route('new');
      this.route('edit', { path: '/:id'});
      this.route('show', {path: '/:id'});
    });

    this.route('order', {
      resetNamespace: true,
      path: '/orders'
    }, function() {
      this.route('new');
      this.route('show', { path: '/:id'});
      this.route('edit', { path: '/:id/edit'});
    });

    this.route('customer', {resetNamespace: true },function() {
      this.route('new');
    });
    this.route('contact', { path: '/contacts', resetNamespace: true }, function() {
      this.route('new');
    });
  });
  // this.route('customer', function() {
  //   this.route('new');
  // });
  // this.route('contact', { path: '/contacts'}, function() {
  //   this.route('new');
  // });

  // this.route('order', function() {
  //   this.route('show');
  // });
  this.route('business-unit-order', { path: '/unit-orders' }, function() {});

  // this.route('order', function() {
  //   this.route('edit');
  // });
});

export default Router;