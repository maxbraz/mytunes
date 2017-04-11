// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
 tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // if(this.collection.at(0)) {
        this.model.enqueue();
      // } else {
        this.model.play();
      // }
      //***************************    HALP DESK   ******************************************************
      //should this file look to see if there is something in the queueu and either play or enqueue?
    }
  },

  render: function() {
    //$el A handy reference instead of re-wrapping the DOM element all the time.
    return this.$el.html(this.template(this.model.attributes));
  }
});
