import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('release');
  },
  actions: {
    save3(params) {
      var newRelease = this.store.createRecord('release', params);
      newRelease.save();
      this.transitionTo('index');
    }
  }
});
