import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  const inflector = Inflector.inflector;
  inflector.irregular('business-unit', 'business-units');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
