import { helper } from '@ember/component/helper';

export function didSelect(params) {
  const [selectedContacts] = params;
  return selectedContacts.length > 0;
}

export default helper(didSelect);