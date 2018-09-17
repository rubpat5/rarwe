import Route from '@ember/routing/route';
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
      document.title = `${band.name} songs - Rock & Roll`
    }
  }
});
