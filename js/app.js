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
  firstName: 'Johnny',
  lastName: 'Depp',
  actions: {
    getActor: function () {
      var actor = this.get('firstName') + ' ' + this.get('lastName');
      alert('The actor is ' + actor);
    },
    setActor: function () {
      this.set('firstName', 'Michael');
      this.set('lastName', 'Schofield');
      var newActor = this.get('firstName') + ' ' + this.get('lastName');
      alert('The new actor is ' + newActor);
    }
  }
});
