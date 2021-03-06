/**
 * Theme JS v1.0.0
 * Copyright 2017 by TuduThemes
 * Licensed under  ()
 */
(function($) {
	"use strict"; 
	jQuery(document).ready(function($) {
        jQuery('.timing').each(function(){
			var countTime = new Date('12/12/2018');
			jQuery(this).countdown(countTime, function(event) {
				jQuery(this).html(
					'<div class="day"><b>'+event.strftime('%D')+' </b><i>Days</i></div> <div class="hour"><b>'+event.strftime('%H')+'</b><i>Hours</i></div><div class="min"><b>'+event.strftime('%M')+'</b> <i>Mins</i></div> <div class="sec"><b>'+event.strftime('%S')+' </b><i>Secs</i></div>'
				);
			});
		});

        // Search toggle.
		$( '.icon-search' ).on( 'click.break', function( event ) {
			$( '.search' ).toggleClass( 'hidden' );
		} );

		/*
		Toolbar View Mode
		-------------------------------------------------- */
		$('.view-mode').each(function(){
			// Grid View
			$(this).find('.grid').on("click", function(event){
				event.preventDefault();
				
				$('#content .view-mode').find('.grid').addClass('active');
				$('#content .view-mode').find('.list').removeClass('active');
				
				$('#content .shop-products').removeClass('list-view');
				$('#content .shop-products').addClass('grid-view');
				
				$('#content .list-col4').removeClass('col-xs-6 col-md-5');
				$('#content .list-col8').removeClass('col-xs-6 col-md-7');
			});
			
			// List View
			$(this).find('.list').on("click", function(event){
				event.preventDefault();
			
				$('#content .view-mode').find('.list').addClass('active');
				$('#content .view-mode').find('.grid').removeClass('active');
				
				$('#content .shop-products').addClass('list-view');
				$('#content .shop-products').removeClass('grid-view');
				
				$('#content .list-col4').addClass('col-xs-6 col-md-5');
				$('#content .list-col8').addClass('col-xs-6 col-md-7');
			});
		});


		/*
		Menu
		-------------------------------------------------- */
		$('.click-nav p').click(function() {
			if ($(this).hasClass('action')) {
				$(this).removeClass('action');
				$('.navigation ul.nav').stop().animate({
					left: "100%"
				}, 400);
			} else {
				$(this).addClass('action');
				//$('.meet-me-header').addClass('revealed');
			   $('.navigation ul.nav').stop().animate({
				left: "55%"
				}, 500);
			}
		});
		$('.click-mobile p').click(function() {
			if ($(this).hasClass('action')) {
				$(this).removeClass('action');
				$('.navigation ul.nav').stop().animate({
					left: "100%"
				}, 400);
			} else {
				$(this).addClass('action');
				//$('.meet-me-header').addClass('revealed');
			   $('.navigation ul.nav').stop().animate({
				left: "0"
				}, 500);
			}
		});

		/*
		Filter Price
		-------------------------------------------------- */
		window.startRangeValues = [0, 500];
		if(!window.startRangeValues) return;
		var startValues = window.startRangeValues,
			min = startValues[0].toFixed(2),
			max = startValues[1].toFixed(2);
		if($('#filter-price').length){
			
			$('#filter-price').slider({

				range : true,
				min : 0,
				max : 1000,
				values : window.startRangeValues,
				step : 1,
				slide : function(event, ui){
					var min = ui.values[0].toFixed(2),
						max = ui.values[1].toFixed(2),
						range = $(this).siblings('.range');
					range.children('.min_value').val(min).next().val(max);
					range.children('.min_val').text('$' + min).next().text('$' + max);
				},

				create : function(event, ui){

					var $this = $(this),
						min = $this.slider("values", 0).toFixed(2),
						max = $this.slider("values", 1).toFixed(2),
						range = $this.siblings('.range');
					range.children('.min_value').val(min).next().val(max);
					range.children('.min_val').text('$' + min).next().text('$' + max);
				}
			});
		}
    });

	$('.thumbImages li:first-child img').addClass("active");
    $('.thumbImages li img').click(function() {
        $('.thumbImages li img').removeClass('active');
        $(this).addClass('active');
        var img_src = $(this).attr('data-src');
        $('#indexImage').attr('src', img_src);
    });
	/*To Top*/
	$(".to-top").removeClass('active');
	/* fade in #back-top */
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() > 100) {
				$('.to-top').addClass('active');
			} else {
				$('.to-top').removeClass('active');
			}
		});
		// scroll body to 0px on click
		$('.to-top').on("click", function() {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	// Quantity buttons
	$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added');
	
	$(document).on('click', '.plus, .minus', function() {
		// Get values
		var $qty		= $(this).closest('.quantity').find('.qty'),
			currentVal	= parseFloat($qty.val()),
			max			= '',
			min			= 1,
			step		= 1;

		// Format values
		if(! currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
		if(max === '' || max === 'NaN') max = '';
		if(min === '' || min === 'NaN') min = 0;
		if(step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

		// Change the value
		if($(this).is('.plus')) {
			if(max &&(max == currentVal || currentVal > max)) {
				$qty.val(max);
			} else {
				$qty.val(currentVal + parseFloat(step));
			}
		} else {
			if(min &&(min == currentVal || currentVal < min)) {
				$qty.val(min);
			} else if(currentVal > 0) {
				$qty.val(currentVal - parseFloat(step));
			}
		}

		// Trigger change event
		$qty.trigger('change');
	});
})(jQuery);