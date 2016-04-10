import Ember from 'ember';

export default Ember.Component.extend({

  myCollection: Ember.inject.service(),

  actions: {
    addToCollection(release) {
      this.get('myCollection').add(release);
    }
  }
});
