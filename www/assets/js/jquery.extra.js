

jQuery(window).scroll(function () {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.header_bottom').addClass("fix");
	} else {
		jQuery('.header_bottom').removeClass("fix");
	}
});



jQuery(document).ready(function(){	
	onloadmethod();	
	
	/*main menu*/
	jQuery(".top-menu ul ul").parent().addClass("dropdown")
	jQuery(".top-menu ul li.dropdown").append("<span class='arrow'></span>")
	jQuery(".top-menu ul li.dropdown .arrow").click(function(){
		
		if (jQuery(this).parent().hasClass('open')) {
			jQuery(this).parent().removeClass("open")
		}else{
			jQuery(this).parent().addClass("open")
		}
	});
	
	jQuery(".btn-topmenu").click(function(){
		jQuery("body").addClass("modal-open");
		jQuery('.top-menu').addClass("open");
	});
	jQuery(".btn-topmenu-close").click(function(){
		jQuery("body").removeClass("modal-open");
		jQuery('.top-menu').removeClass("open");
	});

	jQuery('#product_slider_one').owlCarousel({
		loop:true,
		autoplay:false,
		margin:30,
		dots:false,
		nav:true,
		navText:[],
        autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			640:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:4
			},
			1199:{
				items:4
			}
		}
	});
	jQuery('#product_slider_two').owlCarousel({
		loop:true,
		autoplay:false,
		margin:30,
		dots:false,
		nav:true,
		navText:[],
        autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			640:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:4
			},
			1199:{
				items:4
			}
		}
	});
	
	
});

jQuery(window).resize(function(){	
	onloadmethod();	  
});

function onloadmethod(){	

}



/*-------- back to top jquery start ---------*/

// BY KAREN GRIGORYAN

$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 900) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

}); // ready() END

/*-------- back to top jquery stop ---------*/

$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          
          //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });