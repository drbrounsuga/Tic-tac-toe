
require('../css/style.scss');

var $ = require('jquery');
var template = require('../js/test.handlebars');
var $message = 'Hello World';

$(document).ready(function(){
  $('body').html(template({ message: $message}));
  console.log($('body').css('color'));
});

