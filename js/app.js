App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('databinding', { path: '/databinding' })
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.DatabindingController = Ember.Controller.extend({
  firstName: 'Christiano',
  lastName: 'Ronaldo',
  person: {
    age: 12,
    height: '1.2m'
  }
});
