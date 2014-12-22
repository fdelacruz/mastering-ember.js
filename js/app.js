App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route("about", { path: "/about" });
});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return ['red', 'yellow', 'blue']
  }
});

App.IndexController = Ember.ArrayController.extend({
  needs: ['about'],

  actions: {
    callAboutController: function(){
      this.get('controllers.about').send('popup');
    },
    popup: function () {
      alert('Popup from index controller');
    }
  }
});

App.AboutController = Ember.ObjectController.extend({
  needs: ['index'],

  actions: {
    callIndexController: function(){
      this.get('controllers.index').send('popup');
    },
    popup: function () {
      alert('Popup from about controller');
    }
  }
});
