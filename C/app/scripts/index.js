var $ = require('jquery');


var FormView = require('./views/view');
var Model = require('./models/model');

var blogCollection = new Model.BlogCollection();
var blogStartup = new FormView.BlogStartup({collection: blogCollection});
var blogPresent = new FormView.BlogPresentation({collection: blogCollection})

$('.container').append(blogStartup.el);
$('.container').append(blogPresent.el);
blogCollection.fetch(); //when a blog is added to collection
