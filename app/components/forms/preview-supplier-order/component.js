import Component from '@ember/component';

export default Component.extend({
  actions: {
    didPerform() {
      console.log('you want to perform an action');
    },

    confirmDelete() {
      console.log('we want to CONFIRM that the order can be deleted');
    },
    cancel() {
      console.log('this is a cancel action');
    }
  }
});
