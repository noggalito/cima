$(document).ready(function(){function a(a){$(".navbar-list .nav-current .navbar-menuItem").append("<div class='"+a+"'></div>")}window.matchMedia("(max-width: 768px)").matches?(a("left-arrow"),$(".navbar-list .navbar-menuItem").hover(function(){$(this).append($("<div class='left-arrow'></div>"))},function(){$(this).find("div:last").remove()})):(a("top-arrow"),$(".navbar-list .navbar-menuItem").hover(function(){$(this).append($("<div class='top-arrow'></div>"))},function(){$(this).find("div:last").remove()}))});
!function(){"use strict";console.log("hello world")}();