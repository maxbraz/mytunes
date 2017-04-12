// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  
  model: SongModel,

  initialize: function() {
    this.fetch({
      success: function() {
        console.log('Fetch was successful');
      },
      error: function(e) {
        console.log('ERROR: ', e);
      },
      complete: function(e) {
        console.log('You fetched: ', e);
      }
    });
  },

  'url': 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  parse: function(response) {
    return response.results;
  }

});
