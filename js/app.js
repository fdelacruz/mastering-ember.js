App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('firstModel', { path: 'firstModel' })
  this.route('secondModel', { path: 'secondModel' })
});

App.FirstModelRoute = Ember.Route.extend({
  model: function () {
    return ['item1', 'item2', 'item3'];
  }
});

App.SecondModelRoute = Ember.Route.extend({
  model: function () {
    return {
      firstName: 'Francisco',
      lastName: 'De La Cruz'
    }
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
