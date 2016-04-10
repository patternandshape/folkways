import Ember from 'ember';

export function ratingDivider(params) {
  var reviewRating = params[0].get('rating');

  if (reviewRating >= 5){
    return Ember.String.htmlSafe('<i class="fa fa-thumbs-up"></i>');
  } else if (reviewRating < 5){
    return Ember.String.htmlSafe('<i class="fa fa-thumbs-down"></i>');
  }
}

export default Ember.Helper.helper(ratingDivider);
