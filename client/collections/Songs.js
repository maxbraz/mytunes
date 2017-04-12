// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  
  initialize: function(params) {
    this.fetch({
      success: function(){
        console.log('Max is beans');
      },
      error: function(e){
        console.log('Max is a brazzzzzzillion', e);
      },
      complete: function(e){
        console.log('Fetch complete', e);
      }
    });
  },
  'url': 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  parse: function(response) {
    return response.results;
  },

  model: SongModel

});
