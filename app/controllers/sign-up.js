import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async signUp(event) {
      event.preventDefault();
      const { email, password } = this;
      const user = this.store.createRecord('user', { password, email });
      await user.save();
      await this.transitionToRoute('login');
    }
  }
});
