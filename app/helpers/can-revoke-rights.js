import { helper } from '@ember/component/helper';


/**
 * This function takes three parameters as defined below
 * params[]
 * @param {*}
 * params[0]  is the user id
 * params[1] is the current user id
 * params[2] is the owner id
 */
export function canRevokeRights(params) {
  // return false if any parameter is missing
  if (params[0] === undefined || params[1] == undefined || params[2] === undefined) {
    return false;
  }

  // return false if the user is not the owner for the account
  if (params[1] != params[2]) {
    return false;
  } else if (params[0] == params[1]) {
    // return false if the account is for the owner
    return false;
  }

  // any other situation returns true;
  return true;
}

export default helper(canRevokeRights);