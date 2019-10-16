import Component from '@ember/component';

export default Component.extend({
  actions: {
    confirmDelete() {
      console.log('confirm Delte');
    },

    cancel() {
      console.log('we want to cancel');
    },

    didPerform() {
      console.log('we want to perform an action');
    }
  }
});
