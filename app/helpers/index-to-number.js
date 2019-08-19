import { helper } from '@ember/component/helper';

export default helper(function indexToNumber(params/*, hash*/) {
  // takes an array index and return its naturing order e.g index 0 returns 1
  return params[0] + 1;
});
