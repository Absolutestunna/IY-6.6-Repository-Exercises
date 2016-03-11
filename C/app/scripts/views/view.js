var Backbone = require('backbone');
var $ = require('jquery');
var Handlebars = require('handlebars');
var presentation = require('../../templates/presentation.hbs');

var BlogStartup = Backbone.View.extend({
  className: "sidebar",
  template: presentation,
  initialize: function(){
    // var thistemplate = this.template

    this.listenTo(this.collection, 'add', this.render);

    // this.collection.fetch().done(function(data){
    //   this.collection.each(function(item){
    //     var title = item.get('title')
    //   })
    // }.bind(this));
  },
  render: function(model){
    // console.log(model);
    this.$el.append(this.template(model.toJSON()));
    return this;
  }
});

var BlogPresentation = Backbone.View.extend({
  className: 'main-body',
  event: {
    'click .title': 'displayBlog'
  },
  displayBlog: function(){
    console.log(this)
  }
})

module.exports = {
  'BlogStartup': BlogStartup,
  'BlogPresentation': BlogPresentation
};
