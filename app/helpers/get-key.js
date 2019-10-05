
import { helper } from '@ember/component/helper';

export function getKey(params) {
  return _pretifyKey(params[0]);
}


const _pretifyKey = (key) => {
  const newkey = key.split('.')[1];
  let hashkey = null;

  // change the key to the past tense
  if (newkey === 'update' || newkey === 'create') {
    hashkey = `${newkey}d`;
  } else if (newkey === 'destroy') {
    hashkey = 'deleted';
  } else {
    hashkey = newkey;
  }
  return hashkey.toUpperCase();
};
export default helper(getKey);
