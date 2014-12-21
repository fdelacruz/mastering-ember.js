App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

Ember.Inflector.inflector.irregular('person', 'people');

App.Router.map(function() {
  this.route('people', { path: '/people' });
  this.route('person', { path: '/people/:person_id' });
});

App.PeopleRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('person');
  }
});

// Route not needed since I used :person_id in the route definition above
// App.PersonRoute = Ember.Route.extend({
//   model: function(params){
//     return this.store.find('person', params.person_id)
//   }
// });

App.Person = DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
});

App.PersonAdapter = DS.FixtureAdapter.extend();

App.Person.FIXTURES = [
  {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Giggs'
  },
  {
    id: 2,
    firstName: 'Tom',
    lastName: 'Dale'
  },
  {
    id: 3,
    firstName: 'Yehuda',
    lastName: 'Katz'
  },
  {
    id: 4,
    firstName: 'Erik',
    lastName: 'Bryn'
  }
];
