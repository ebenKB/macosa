import { helper } from '@ember/component/helper';

/**
 * params[0] is the user id
 * params[1] is the owner id
 * @param {*} params
 */
export function isOwner(params) {
  return params[0] == params[1];
}

export default helper(isOwner);