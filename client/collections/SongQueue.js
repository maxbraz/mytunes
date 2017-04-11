// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (!this.at(1)) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  } 
});
