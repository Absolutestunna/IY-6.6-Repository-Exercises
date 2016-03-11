var Backbone = require('backbone');
var $ = require('jquery');
var formTemplate = require('../../templates/index.hbs')

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var FormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  className: 'blog-group',
  events: {
    'submit': 'postData'
  },
  postData: function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    console.log(formData)
    this.collection.create(formData);
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
})

module.exports = FormView;
