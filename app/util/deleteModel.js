import config from 'macosa/config/environment';
import { get } from '@ember/object';
import fetch from 'fetch';

class DeleteModel{
  constructor() {

  }

  deleteRecord(store, type, snapshot) {
    const options = {
      method: 'DELETE',
    };
    fetch(`${config.apiEndpoint}/${config.apiNamespace}/${get(snapshot, 'modelName')}s/${get(snapshot, 'id')}?delete=soft`, options)
      .then((response) => {
        response.json()
          .then((d) => {
            console.log('we are done and this is the response', d);
          });
      });
  }
}

export default new DeleteModel;