import { helper } from '@ember/component/helper';

export function equal(params) {
  console.log('these are the params', params[0], params[1]);
  return params[0] === params[1];
}

export default helper(equal);