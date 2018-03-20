var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(exampleVideoData);
    this.render();
    
    console.log(this.videos);
  },


  render: function() {
    this.$el.html(this.template());

    //render videoList
    new VideoListView({
      collection: this.videos,
      // $el: $('.list');
      el: this.$('.list')
      
    });
    new VideoPlayerView ({
      el: this.$('.player')
    });
    new SearchView ({
      el: this.$('.search')
    });
    return this;
  },

  template: templateURL('src/templates/app.html')

});
