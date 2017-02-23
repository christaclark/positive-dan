$(window).scroll(function(){

	"use strict";

  	var sticky = $('#headerBar'),
      scroll = $(window).scrollTop();

  	if (scroll >= 50) sticky.addClass('headerScroll');
  	else sticky.removeClass('headerScroll');
  	
});


