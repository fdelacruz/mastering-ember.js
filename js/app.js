App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});
// 1. Define routes
App.Router.map(function() {
  this.route('first-route', { path: 'first-route-in-url' })
});
// 2. Load route and models
App.FirstRouteRoute = Ember.Route.extend({
  model: function() {
    return ['first item', 'second item']
  }
});
// 3. Models (if any) get passed to the controller
App.FirstRouteController = Ember.Controller.extend({
  actions: {
    headerclicked: function () {
      alert('Header Clicked in controller');
    }
  },
  firstName: 'Francisco',
  lastName: 'De La Cruz'
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
