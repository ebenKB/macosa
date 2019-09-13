// app/services/notifications.js
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default NotificationsService.extend({
  notifications: service('notification-messages'),
  // Extend the imported service
  showInfo(msg) {
    msg == null || msg == '' ? msg = 'Please provide a message' : msg ;
    this.get('notifications').info(msg, this.options);
  },

  showError(msg) {
    msg == null || msg == '' ? msg = 'Please provide a message' : msg ;
    this.get('notifications').error(msg, this.options);
  },

  showSuccess(msg) {
    msg == null || msg == '' ? msg = 'Please provide a message' : msg ;
    this.get('notifications').success(msg, this.options);
  },

  init() {
    this._super();
    set(this, 'options', {
      position: 'top-right',
      autoClear: true,
      clearDuration: 4500,
    });
  }
});
