var Backbone = require('backbone');
var $ = require('jquery');

var Contact = Backbone.Model.extend({

});
var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/stunnaB"

});

module.exports = {
  "Contact": Contact,
  "ContactCollection": ContactCollection
}
