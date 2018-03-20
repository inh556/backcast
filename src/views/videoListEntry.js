var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   // $('.video-list-entry-title').on('click', () => {
  //   //   console.log('the click event was triggered');
  //   //   console.log(this.model);
  //   // });

  //   // this.listenTo(this.model, 'element: click', this.eventHandler, this);
    
  // },

  events: {
    "click .video-list-entry-title": "eventHandler"
  },

  eventHandler: function() {
    this.model.select();
  },
  // events: {
  //   "click .video-list-entry-title": "this.model.select"
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
