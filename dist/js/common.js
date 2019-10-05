'use strict';

$(document).ready(function () { 
	let nextItems = $('.js-next-items');
	nextItems.hide();
    $('.js-next-button').click(function(){
        nextItems.slideDown('fast');
    });
}); 

