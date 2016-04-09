import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview1() {
      var params = {
        author: this.get('author'),
        date_added: Date.now(),
        rating: this.get('rating'),
        body: this.get('body'),
        review: this.get('review')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
