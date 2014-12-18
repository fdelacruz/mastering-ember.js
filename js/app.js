App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.ArrayController.extend({
  firstName: 'Christina',
  actions: {
    addNewItem: function() {
      this.get('model').pushObject('new item');
    }
  }
});
