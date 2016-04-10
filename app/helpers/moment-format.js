import Ember from 'ember';
import config from '../config/environment';
import FormatHelper from 'ember-moment/helpers/moment-format';

Ember.Handlebars.helper('format-time', function(date) {
  return moment(date).format('LT');
});
