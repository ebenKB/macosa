import Component from '@ember/component';

export default Component.extend({
  placeholder: null,
  disabled: false,
  type: '',
  name: null,
  classNames: 'ui input',
  changeset: null,
  property: null,
  actions: {
    // validate(changeset) {
    //   console.log('you want to validate the changeset');
    //   // console.log('the property has changed');
    //   this.get('didValidate')(changeset);
    // }

    validate() {
      console.log('Calling the validator');
      this.get('didValidate')();
    }
  },
});
