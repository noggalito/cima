$(document).ready(function(){$(".navbar-list .nav-current .navbar-menuItem").append("<div class='top-arrow'></div>"),window.matchMedia("(max-width: 768px)").matches?$(".navbar-list .navbar-menuItem").hover(function(){$(this).append($("<div class='left-arrow'></div>"))},function(){$(this).find("div:last").remove()}):$(".navbar-list .navbar-menuItem").hover(function(){$(this).append($("<div class='top-arrow'></div>"))},function(){$(this).find("div:last").remove()})});
!function(){"use strict";console.log("hello world")}();