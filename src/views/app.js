var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(this.videos.search());
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
    //render videoList
    new VideoListView({
      collection: this.videos,
      // $el: $('.list');
      el: this.$('.list')
    }).render();
    new VideoPlayerView ({
      collection: this.videos,
      el: this.$('.player')
    });
    new SearchView ({
      el: this.$('.search'),
      collection: this.videos,
    });
    return this;
  },
  template: templateURL('src/templates/app.html')
});
