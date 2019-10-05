import { helper } from '@ember/component/helper';

export default helper(function indexToNumber(params/*, hash*/) {
  console.log('this is the key');
  return params[0].split('.')[0].replace('_', '-').toLowerCase();
});