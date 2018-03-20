var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  }, 
  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.map((video) => {
      this.$el.append(new VideoListEntryView({model: video}).render().el);
    });
    return this;
  },
  template: templateURL('src/templates/videoList.html')
});


