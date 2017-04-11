// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      // this.model.play();
    }
  },

  //add a function that will add song to queue if a song is already playing
   //an event listener, 
   //if statement that listesn to see if song already playing 
   // if nothing playing render song, 
   // else 
    //put song in queue

  render: function() {
    //$el A handy reference instead of re-wrapping the DOM element all the time.
    return this.$el.html(this.template(this.model.attributes));
  }

});
