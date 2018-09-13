import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

const Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
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
    return A([blackDog, yellowLedbetter, pretender]);
  }
});
