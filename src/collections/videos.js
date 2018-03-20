var Videos = Backbone.Collection.extend({
  

  model: Video,
  
  // initialize: function() {
  //   $('.btn').on('click', this.search);
  // },
  // events: {
  //   'click button': 'search'
  // },
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
      
      // success: function(data) {
      //   this.parse(data);
      // },
      // error: function(data) {
      //   alert('It\'s not work')
      // }
    });
  },
  parse: function(response) {
    // console.log(response.items);
    return response.items;
  }
  // search: function() {
  //   console.log('hey');
  //   $.AJAX({
  //     url: '/youtube/v3/search',
  //     type: 'GET',
  //     data: JSON.stringify(data),
  //     contentType: 'application/json',
  //     success: function (data) {
  //       this.collection = data;
  //     },
  //     error: function (data) {
  //       alert('There was an error retrieving the data!');
  //     }
  //   });
  // }

});
