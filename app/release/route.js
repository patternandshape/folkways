import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('release', params.release_id);
  },
  actions: {
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
