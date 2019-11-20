import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  name: attr(),
  discount: attr('number'),
  published: hasMany('book')
});
