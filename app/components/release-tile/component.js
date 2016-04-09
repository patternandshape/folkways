import Ember from 'ember';

export default Ember.Component.extend({
  // model() {
  //   return this.store.findAll('release');
  // },

  myCollection: Ember.inject.service(),

  actions: {
    addToCollection(release) {
      this.get('myCollection').add(release);
    }
  }
});
