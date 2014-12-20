App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('blog');
  this.route('article', { path: 'articles/:article_id'} );
});

App.Article = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});

App.Comment = DS.Model.extend({
  text: DS.attr(),
  article: DS.belongsTo('article')
});

App.Article.FIXTURES = [
  {
    id: 1,
    title: 'First stab at ember blogging',
    body: 'Building ambitious applications in ember feels like a breeze',
    comments: [2]
  },
  {
    id: 2,
    title: 'Blogging deep into ember',
    body: 'Ember is just great, word',
    comments: [1, 3]
  }
];
  
App.Comment.FIXTURES = [
  {
    id: 1,
    text: 'Wow, excited to learn ember together',
    article: 2
  },
  {
    id: 2,
    text: 'Everyday with ember keeps gettting better',
    article: 1
  },
  {
    id: 3,
    text: 'Ember is awesome',
    article: 2
  }
];

App.ArticleAdapter = DS.FixtureAdapter.extend();
App.CommentAdapter = DS.FixtureAdapter.extend();

App.BlogRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('article');
  }
});
