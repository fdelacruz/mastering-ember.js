App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('first-route', { path: 'first-route-in-url' })
});

App.FirstRouteRoute = Ember.Route.extend({
  
});

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
