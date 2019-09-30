import AppAdapter from 'macosa/application/adapter';
import {underscore} from '@ember/string';
import fetch from 'fetch';
import config from 'macosa/config/environment';
import DeleteModel from 'macosa/util/deleteModel';

import { get } from '@ember/object';

export default AppAdapter.extend({
  destroyRecord() {
    console.log('we want to destroy the record');
  },

  deleteRecord(store, type, snapshot) {
    DeleteModel.deleteRecord(store, type, snapshot);
    // const options = {
    //   method: 'DELETE',
    // };
    // fetch(`${config.apiEndpoint}/${config.apiNamespace}/${get(snapshot, 'modelName')}s/${get(snapshot, 'id')}?delete=soft`, options)
    //   .then((response) => {
    //     response.json()
    //       .then((d) => {
    //         console.log('we are done and this is the response', d);
    //       });
    //   });
  },

  pathForType(type) {
    // convert the model name to underscore and pluralize it
    return `${underscore(type)}s`;
  },
});
