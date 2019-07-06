import Component from '@ember/component';

export default Component.extend({
  placeholder: null,
  disabled: null,
  type: 'text',
  name: null,
  classNames: 'ui input',
  changeset: null,
  property: null,
  actions: {
    onChange(changeset) {
      console.log('the property has changed');
      this.get('onChange')(changeset);
    }
  }
});
