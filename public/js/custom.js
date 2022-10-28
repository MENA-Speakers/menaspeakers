$(document).ready(function() {
	
	$('.maps').click(function () {
			$('.maps iframe').css("pointer-events", "auto");
		});
		
		$( ".maps" ).mouseleave(function() {
		  $('.maps iframe').css("pointer-events", "none"); 
		});

	
		$("#stk").sticky({topSpacing:0});

	wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:      false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
					
	$('.carousel').carousel({
    pause: "false"
});
	
	$(".bootombtn").click(function(){
	var scroll_area = $("#youmaking").offset().top - 100;
	$("body, html").animate( {scrollTop: scroll_area},1000);
});

$("#get").click(function(){
	var scroll_area = $("#con").offset().top - 100;
	$("body, html").animate( {scrollTop: scroll_area},1000);
});
$("#our").click(function(){
	var scroll_area = $("#philosophy").offset().top - 100;
	$("body, html").animate( {scrollTop: scroll_area},1000);
});
$("#our1").click(function(){
	var scroll_area = $("#approach").offset().top - 100;
	$("body, html").animate( {scrollTop: scroll_area},1000);
});
$("#best").click(function(){
	var scroll_area = $("#speaker").offset().top - 100;
	$("body, html").animate( {scrollTop: scroll_area},1000);
});
$("#hometop").click(function(){
	var scroll_area = $("#home").offset().top - 100;
	$("body, html").animate( {scrollTop: scroll_area},1000);
});

$('.bxslider').bxSlider({
  minSlides: 4,
  maxSlides: 6,
  slideWidth: 200,
  slideMargin: 0,
  pager:false
  
});

now = new Date;
thecopyrightYear = now.getYear();
if (thecopyrightYear < 1900) thecopyrightYear = thecopyrightYear + 1900;
$("#cur-year").html(thecopyrightYear)




});



$(function(){
	resizeFunction();
	$('.s-bar').hover(function(){
		$(this).stop(true,true).animate({right:'210px'}, 500, 'easeOutExpo');
		$('.side-bars').css('z-index','1004');
		}, function(){
			$(this).animate({right:'0px'}, 500, 'easeOutBounce');
			$('.side-bars').css('z-index','999');
	});
	
	$('.floating-form-wrap .form-handle').click( function(){
		if($('.floating-form-wrap').css('margin-right')=='-451px'){
			$('.floating-form-wrap').animate({'margin-right': '0px'});
			$('.cus-overlay').fadeIn(300);
			$('.form-handle').addClass('active');
		}
		else{
			$('.floating-form-wrap').animate({'margin-right': '-451px'});
			$('.cus-overlay').fadeOut(300);
			$('.form-handle').removeClass('active');
		}
	});
	
	$('.floating-banner').hover(function(){
		$('.floating-banner').stop(1,1).animate({'margin-left': '0px'},200);
		$('.cus-overlay').stop(1,1).fadeIn(200);
	},function(){
		$('.floating-banner').animate({'margin-left': '-451px'}, 200);
		$('.cus-overlay').fadeOut(200);
	});
	
	$('.cus-overlay').click( function(){
		$(this).fadeOut(300);
		$('.floating-form-wrap').animate({'margin-right': '-451px'});
		$('.form-handle').removeClass('active');
	});
	
	$('a.close').click( function(){
		$('.cus-overlay').trigger('click');
	});
	
	$('.opensideform').click( function(){
		$('.form-handle').trigger('click');
	});

}); /* Main Function Ends */


function livechat(){
	$zopim.livechat.window.toggle();
}

$(window).resize(function(){
	resizeFunction();

});

$(window).scroll(function(e){
	
	if($(window).width() >= 767){
	
		if( $('.floating-form-wrap')[0] && $('.side-bars')[0] ){
			var headerHeight = $( '.slide' ).height(); 
			if ( ( $(window).scrollTop() >= headerHeight  ) ){
				$('.floating-form-wrap, .side-bars').fadeIn( 300 );
				$('.floating-banner').fadeIn(300);
				
			}
			else {
				$('.floating-form-wrap, .side-bars').fadeOut( 300 );
				$('.floating-banner').fadeOut(300);
				
			}
		}
	
	}
	
	if($(window).width() <= 767){
		$('.opensideform').click( function(){
			$('.cus-overlay').hide();
			$('html, body').stop(0,0).animate({
			scrollTop: $('.formbg').offset().top
			});
		});

	}
	
});

$(".sch").click(function(){
	$(".form-handle").trigger("click");
});

function resizeFunction(){


}


