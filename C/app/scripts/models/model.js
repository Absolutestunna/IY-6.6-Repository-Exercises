var Backbone = require('backbone');
var $ = require('jquery');



var Blog = Backbone.Model.extend({

})


var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/stunnaBlog",
  parse: function(data){
    return data;
  }
})

module.exports = {
  "Blog": Blog,
  "BlogCollection": BlogCollection
}
