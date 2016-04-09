import Ember from 'ember';

export default Ember.Component.extend({
  addNewRelease: false,

  actions: {
    releaseFormShow() {
      this.set('addNewRelease', true);
    },
    save1() {
      var params = {
        artist: this.get('artist'),
        title: this.get('title'),
        year: parseInt(this.get('year')),
        image: this.get('image'),
        description: this.get('description'),
      };
      this.set('addNewRelease', false);
      // this.set('artist', "");
      // this.set('title', "");
      // this.set('year', "");
      // this.set('image', "");
      // this.set('description', "");
      this.sendAction('save2', params);
    }
  }
});
