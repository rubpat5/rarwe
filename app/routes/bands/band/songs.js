import Route from '@ember/routing/route';
import { capitalize as capitalizeWords } from 'rarwe/helpers/capitalize';

export default Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    })
  },
  actions: {
    didTransition() {
      const band = this.modelFor('bands.band');
      document.title = `${capitalizeWords(band.name)} songs - Rock & Roll`
    }
  }
});
