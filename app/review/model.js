import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  body: DS.attr(),
  release: DS.belongsTo('release', {async: true})
});
