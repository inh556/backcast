var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  
  render: function() {
    // debugger;
    this.$el.children().detach();
    // this.$el.html(this.template())
    // this.$el.html('')
    this.$el.append(
      this.collection.map((video) => {
        return new VideoListEntryView({model: video}).render().el;
      })
    );
    // this.collection.each(function(video) {
    //   this.$el.children().append(
    //     new VideoListEntryView( {model: video} ).render()
    //   );
    // })
    // this.$el.children().append(
    //   this.collection.map(function(data) {
    //     return new VideoListEntryView( {model: video} ).render();
    //   })
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});


