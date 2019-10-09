import { helper } from '@ember/component/helper';

export function isCurrentUser(params) {
  return params[0] === params[1];
}

export default helper(isCurrentUser);