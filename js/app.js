App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // put your routes here
});

App.ApplicationAdapter = DS.RESTAdapter.extend({});

App.Person = DS.Model.extend({
  firstName: DS.attr()
});

App.Car = DS.Model.extend({
  type: DS.attr()
});

App.Person.FIXTURES = [
  {
    id: 1,
    firstName: 'Pablo'
  }
]

App.PersonAdapter = DS.FixtureAdapter.extend({});

App.CarAdapter = DS.RESTAdapter.extend({});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  }
});
