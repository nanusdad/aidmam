var Router = Backbone.Router.extend({
  routes: {
    "": "main",
    "about": "about",
    "whatwedo": "whatwedo",
    "info": "info",
    "press": "press",
    "gallery": "gallery",
    "orgs_table": "orgs_table"
  },
  main: function() {
    Session.set('currentPage', 'homePage');
    this.navigate('/');
  },
  whatwedo: function() {
    //whatwedo page
    Session.set('currentPage', 'whatwedo');
    this.navigate('whatwedo');
  },
  about: function() {
    //About page
    Session.set('currentPage', 'about');
    this.navigate('about');
  },
  info: function() {
    //Info page
    Session.set('currentPage', 'info');
    this.navigate('info');
  },
  press: function() {
    //Press page
    Session.set('currentPage', 'press');
    this.navigate('press');
  },
  gallery: function() {
    //Gallery page
    Session.set('currentPage', 'gallery');
    this.navigate('gallery');
  },
  orgs_table: function() {
    //Members page
    Session.set('currentPage', 'orgs_table');
    this.navigate('orgs_table');
  }
});

var app = new Router;
Meteor.startup(function() {
  Backbone.history.start({
    pushState: true
  });
});