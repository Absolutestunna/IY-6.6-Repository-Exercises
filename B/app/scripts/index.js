var $ = require('jquery');

var FormView = require('./views/view');
var model = require('./models/model');

var modelCollection = new model.ContactCollection();
var formView = new FormView({collection: modelCollection})

console.log(modelCollection)

$('.container').append(formView.render().el)
