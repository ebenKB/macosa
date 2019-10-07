import AppAdapter from 'macosa/application/adapter';
import {underscore} from '@ember/string';
import DeleteModel from 'macosa/util/deleteModel';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';

export default AppAdapter.extend({
  session: service(),

  // deleteRecord(store, type, snapshot) {
  //   const {token} = get(this, 'session.data.authenticated');
  //   DeleteModel.deleteRecord(store, type, snapshot, token);
  // },

  pathForType(type) {
    // convert the model name to underscore and pluralize it
    return `${underscore(type)}s`;
  },
});
