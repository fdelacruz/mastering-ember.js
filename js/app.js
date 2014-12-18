App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // this.route('index', { path: '/' })
  this.route('about', { path: '/about' })
});

App.IndexRoute = Ember.Route.extend({
  // redirect: function() {
  //   this.transitionTo('about')
  // }
});

App.IndexController = Ember.ObjectController.extend({
   actions: {
    linkClicked: function() {
      this.transitionToRoute('about');
    }
   }
});

App.AboutRoute = Ember.Route.extend({

});
