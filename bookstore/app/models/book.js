import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  price: attr('number'),
  author: belongsTo('author', { inverse: 'books' }),
  publisher: belongsTo('publisher', { polymorphic: true, inverse: 'published' })
});
