import Component from '@ember/component';

export default Component.extend({
  checked: false,

  didUpdateAttrs() {
    this._super(...arguments);
    console.log('this is the state of checked...', this.checked);
  },
});
