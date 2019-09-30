import config from 'macosa/config/environment';
import { get } from '@ember/object';
import { underscore } from '@ember/string';
import fetch from 'fetch';

class DeleteModel{
  constructor() {

  }

  deleteRecord(store, type, snapshot, token) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
    fetch(`${config.apiEndpoint}/${config.apiNamespace}/${underscore(get(snapshot, 'modelName'))}s/${get(snapshot, 'id')}?type=normal`, options)
      .then((response) => {
        response.json()
          .then((d) => {
            // console.log('we are done and this is the response', d);
          });
      });
  }
}

export default new DeleteModel;