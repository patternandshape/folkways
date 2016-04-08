import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  title: DS.attr(),
  year: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
