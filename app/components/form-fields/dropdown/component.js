import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didReceiveAttrs() {
    $('.amount.figures')
      .dropdown({
        'set selected': '1',
        direction: 'upward'
      });
  },
  default: '',
  options: '',
  property: null,
  changeset: null,
  dataValue: null,
  isLoading: false,
  placeholder: 'Select an option',
  key: 'name',
});
