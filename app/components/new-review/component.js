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
        date: Date.now(),
        // rating: this.get('rating'),
        body: this.get('body'),
        release: this.get('release')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
