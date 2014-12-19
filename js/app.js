App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // put your routes here
});

App.PersonAdapter = DS.FixtureAdapter.extend({});

App.Person = DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  age: DS.attr()
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  }
});

App.Person.FIXTURES = [
  { 
    id: 1,
    firstName: 'John',
    lastName: 'Cena',
    age: 27
  },
  {
    id: 2,
    firstName: 'Joan',
    lastName: 'Kelly',
    age: 26
  }
]
