var Videos = Backbone.Collection.extend({
  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(input) {
    this.fetch({
      url: this.url,
      data: {
        part: 'snippet',
        q: input,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true',
        type: 'video'
      },
    });
    console.log(this);
  },
  parse: function(response) {
    console.log(response);
    return response.items;
  }
});
