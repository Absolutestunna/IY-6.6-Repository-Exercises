var $ = require('jquery')

//require router
//in router, router class (initialize on router)
var FormView = require('./views/view'); //view
var models = require('./models/post');  //model

var postCollection = new models.PostCollection();
var formView = new FormView({collection: postCollection})

console.log(postCollection)

$('.container').append(formView.render().el);
