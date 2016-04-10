import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('release', params.release_id);
  },

  fullName: Ember.computed('review.firstName', 'review.lastName', function() {
    return this.get('review.firstName') + ' ' + this.get('review.lastName');
  }),

  myCollection: Ember.inject.service(),

  actions: {

    addToCollection(release) {
      this.get('myCollection').add(release);
    },

    saveReview3(params) {
      var newReview = this.store.createRecord('review', params);
      var release = params.release;
      release.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return release.save();
      });
      this.transitionTo('release', params.release);
    }
  }
});
