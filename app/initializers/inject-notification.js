export function initialize(application) {
  application.inject('controller', 'notifications', 'service:notification');
}


export default {
  name: 'inject-notifications',
  initialize
};
