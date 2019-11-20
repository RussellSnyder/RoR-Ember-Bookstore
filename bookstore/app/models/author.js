import Publisher from './publisher';
import { attr, hasMany } from '@ember-data/model';

export default Publisher.extend({
  name: attr(),
  books: hasMany()
});
