import Component from '@ember/component';
import {not} from '@ember/object/computed';

export default Component.extend({
  type: 'success',
  message: 'Custom message is here',
  position: 'top',
  autoClear: true,
  clearDuration: 500,
  zindex: '9999',
  clearAll: true,

  // disableTimeoutInput: not('autoClear'),
});
