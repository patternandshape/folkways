import Ember from 'ember';
// import moment from 'moment';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview1() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        date: Date(),
        // date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        rating: parseInt(this.get('rating')),
        body: this.get('body'),
        release: this.get('release')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
