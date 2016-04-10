import Ember from 'ember';

export default Ember.Component.extend({

  fullName: Ember.computed('review.firstName', 'review.lastName', function() {
    return this.get('review.firstName') + ' ' + this.get('review.lastName');
  }),
});
