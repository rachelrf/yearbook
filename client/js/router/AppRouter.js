// http://backbonejs.org/#Router
// Use the included router to create a 'cohort/:cohortNumber' route that will populate the view with the correct cohort members

var AppRouter = window.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'cohort/:cohortNumber': 'cohortPage',
    'student/:studentID': 'studentPage'
  }

});