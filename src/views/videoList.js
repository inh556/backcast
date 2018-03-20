var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    // debugger;
    // console.log(this.$el.children);
    this.$el.html(this.template());
    this.$el.children().detach();
    // console.log(this.collection)
    this.collection.map((video) => {
      this.$el.append(new VideoListEntryView({model: video}).render().el);
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});


