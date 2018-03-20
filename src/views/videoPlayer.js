var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'select', this.passVideo);
    this.listenTo(this.collection, 'sync', function() {
      this.model = this.collection.models[0];
      this.model.select();
    });
  },
  passVideo: function(video) {
    this.model = video; // set model to video that is clicked
    this.render(); // render video
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else { 
      this.$el.html('<div class="loading">Please wait...</div>'); //show loading screen
    }   
    return this;
  },
  template: templateURL('src/templates/videoPlayer.html')
});
