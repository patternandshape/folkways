import Ember from 'ember';

export function ratingDivider(params) {
  var reviewRating = params[0].get('rating');

  if (reviewRating >= 5){
    return Ember.String.htmlSafe('<i class="fa fa-thumbs-o-up"></i>');
  } else if (reviewRating < 5){
    return Ember.String.htmlSafe('<i class="fa fa-thumbs-o-down"></i>');
  }
}

export default Ember.Helper.helper(ratingDivider);
