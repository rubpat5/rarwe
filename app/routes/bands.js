import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
import { dasherize } from '@ember/string';
import { A } from '@ember/array';

const Band = EmberObject.extend({
  name: '',
  slug: computed('name', function() {
    return dasherize(this.name);
  })
});

const Song = EmberObject.extend({
  title: '',
  rating: 0,
  band: ''
});



export default Route.extend({
  model() {
    const blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });
    const yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });
    const pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });
    const daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });
    const ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: A([blackDog]) });
    const pearlJam = Band.create({ name: 'Pearl Jam', songs: A([yellowLedbetter, daughter]) });
    const fooFighters = Band.create({ name: 'Foo Fighters', songs: A([pretender]) });

    return A([ledZeppelin, pearlJam, fooFighters]);
  }
});
