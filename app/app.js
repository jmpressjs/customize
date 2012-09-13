var $ = require("jquery");
var mainTemplate = require("./main.jade");
var View = require("./View");
$(function() {
	$("body").html(mainTemplate());
	new View($(".page"));
});