import Ember from 'ember';

export default Ember.Component.extend({
  newReview: false,
  actions: {
    reviewFormShow() {
      this.set('newReview', true);
    },
    saveReview1() {
      var params = {
        author: this.get('author'),
        date: Date(),
        rating: this.get('rating'),
        body: this.get('body'),
        review: this.get('review')
      };
      this.set('newReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
