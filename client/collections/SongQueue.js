// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (!this.at(1)) {
        this.playFirst();
      }
    });
    
    this.on('ended', function(){
      var justPlayed = this.at(0);
      this.remove(justPlayed);
      if(this.at(0)){
        this.playFirst();
      }
    });

    this.on('dequeue', function(){
      this.remove(this.at(0))
    }, this);

    this.on('enqueue', function() {
      //if there is no song playing and there is nothing in the queueue
      if (!this.at(0)){
        //play the song
        this.playFirst();
      //or else
      } else {
        //push/shift it into the queue to play later
        this.add(this.model);
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  }
});
