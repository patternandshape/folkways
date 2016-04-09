import Ember from 'ember';

export default Ember.Service.extend({
  releases: [],

  add(release) {
    this.get('releases').pushObject(release);
  }
});
