var Backbone = require('backbone');
var $ = require('jquery');


var Post = Backbone.Model.extend({
  
})
var PostCollection = Backbone.Collection.extend({
    model: Post,
    url: "http://tiny-lasagna-server.herokuapp.com/collections/stunna"

})

module.exports = {
  "Post": Post,
  "PostCollection": PostCollection
}
