App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('articles', { path: 'articles' }, function(){
    this.route('index', { path: '/' });
    this.route('new',   { path: '/new' });
    this.route('edit',  { path: '/edit/:id' });
  });
});
