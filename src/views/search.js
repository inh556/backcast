var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  events: {
    'click button': 'eventHandler',
    'keyup input': 'eventHandler'
  },
  
  eventHandler: function() {
    this.collection.search(this.$('input').val().trim());
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
