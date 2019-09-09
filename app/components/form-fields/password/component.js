import Component from '@ember/component';

export default Component.extend({
  placeholder: null,
  disabled: null,
  type: 'password',
  name: null,
  classNames: 'ui input',
  changeset: null,
  property: null,
  actions: {
    onChange(changeset) {
      this.get('onChange')(changeset);
    }
  }
});
