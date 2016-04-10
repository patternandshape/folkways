import Ember from 'ember';

export function releasePopularity(params) {
  var release = params[0];

  if (release.get('reviews').get('length') >= 1) {
    return Ember.String.htmlSafe('<i class="fa fa-commenting-o"></i>');
  }
}

export default Ember.Helper.helper(releasePopularity);
