import Component from '@ember/component';

export default Component.extend({
  actions: {
    confirmDelete() {
      console.log('confirm Delte')
    },

    cacnel() {
      console.log('we want to cancel')
    }
  }
});
