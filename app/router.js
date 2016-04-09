import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('release', {path: '/release/:release_id'});
  this.route('add-release');
  this.route('collection');
});

export default Router;
