// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      this.at(0).play;
    });
  },

  playFirst: function() {
    console.log('we are in PlayFirst');
    this.models[0].play();
    this.at(0);
  } 
});
