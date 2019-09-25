import AppAdapter from 'macosa/application/adapter';
import {underscore} from '@ember/string';

export default AppAdapter.extend({
  pathForType(type) {
    // convert the model name to underscore and pluralize it
    return `${underscore(type)}`;
  },
});
