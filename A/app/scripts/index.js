var $ = require('jquery')

//require router
//in router, router class (initialize on router)
var FormView = require('./views/view'); //view
var models = require('./models/post');  //model
var postCollection = new models.PostCollection();

var form = new FormView({collection: postCollection})
$('.container').append(form.render().el);
