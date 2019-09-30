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
    this.route('action', { path: '/reset/action'});
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
      this.route('show', { path: '/:id'});
    });

    this.route('order', {
      resetNamespace: true,
      path: '/orders'
    }, function() {
      this.route('new');
      this.route('show', { path: '/:id'});
      this.route('edit', { path: '/:id/edit'});
      // this.route('supplier', {path: '/:id'}, function() {
      //   this.route('new');
      // });
      this.route('loading');
    });

    this.route('customer', {resetNamespace: true },function() {
      this.route('new');
    });

    this.route('contact', { path: '/contacts', resetNamespace: true }, function() {
      this.route('new');
    });

    this.route('type',{
      resetNamespace: true
    },function() {
      this.route('new');
    });

    this.route('business-unit-order', {
      resetNamespace: true,
      path: '/unit-orders'
    }, function() {});

    this.route('manufacturer-order', {
      resetNamespace: true
    },function() {});

    this.route('account-manager', {
      resetNamespace: true
    },function() {
      this.route('new');
    });

    this.route('supplier-order', {
      resetNamespace: true,
    }, function() {
      this.route('edit', {path: '/:id'});
      this.route('new', { path: '/:id'});
    });

    this.route('notification', {
      resetNamespace: true,
    },function() {});
  });
});

export default Router;