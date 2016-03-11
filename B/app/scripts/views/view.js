var Backbone = require('backbone');
var $ = require('jquery');
var contactTemplate = require('../../templates/contacts.hbs');


$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var ContactView = Backbone.View.extend({
  tagName: 'form',
  className: 'contact-group',
  template: contactTemplate,
  events: {
    'submit': 'processInfo'
  },
  processInfo: function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    console.log(formData)
    this.collection.create(formData);
  },
  render: function(){
    this.$el.html(this.template()); //this.$el is referring to the form
    return this;
  }

})

module.exports = ContactView;
