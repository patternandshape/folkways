import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  body: DS.attr(),
  release: DS.belongsTo('release', {async: true})
});
