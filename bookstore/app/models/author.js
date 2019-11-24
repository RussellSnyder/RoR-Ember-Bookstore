import Publisher from './publisher';
import { attr, hasMany } from '@ember-data/model';
import { on } from '@ember/object/evented';

export default Publisher.extend({
  name: attr(),
  books: hasMany(),

  onDidLoad: on('didLoad', function() {
    this.set('loadedAt', new Date());
  })
  
});
