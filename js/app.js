App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // put your routes here
});

App.IndexController = Ember.ObjectController.extend({
  actions: {
    handleSubmit: function(){
      alert('The firstName is ' + this.get('firstName'));
    }
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return ['red', 'yellow', 'blue']
  }
});

