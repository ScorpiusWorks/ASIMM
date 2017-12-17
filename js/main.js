(function () {

	'use strict';

	// start scorpius-loader
	$(document).ready(function() {
		setTimeout(function(){
			$('body').addClass('loaded');
			// $('h1').css('color','#222222');
		}, 500);
	});

	// iPad and iPod detection
	var isiPad = function(){
	  return (navigator.platform.indexOf("iPad") != -1);
	}

	var isiPhone = function(){
    return (
      (navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPod") != -1)
    );
	}

	// Mobile Menu Clone ( Mobiles/Tablets )
	var mobileMenu = function() {
		if ( $(window).width() < 769 ) {
			$('html,body').addClass('scorpius-overflow');

			if ( $('#scorpius-mobile-menu').length < 1 ) {

				var clone = $('#scorpius-primary-menu').clone().attr({
					id: 'scorpius-mobile-menu-ul',
					class: ''
				});
				var cloneLogo = $('#scorpius-logo').clone().attr({
					id : 'scorpius-logo-mobile',
					class : ''
				});

				$('<div id="scorpius-logo-mobile-wrap">').append(cloneLogo).insertBefore('#scorpius-header-section');
				$('#scorpius-logo-mobile-wrap').append('<a href="#" id="scorpius-mobile-menu-btn"><i class="ti-menu"></i></a>')
				$('<div id="scorpius-mobile-menu">').append(clone).insertBefore('#scorpius-header-section');

				$('#scorpius-header-section').hide();
				$('#scorpius-logo-mobile-wrap').show();
			} else {
				$('#scorpius-header-section').hide();
				$('#scorpius-logo-mobile-wrap').show();
			}

		} else {

			$('#scorpius-logo-mobile-wrap').hide();
			$('#scorpius-header-section').show();
			$('html,body').removeClass('scorpius-overflow');
			if ( $('body').hasClass('scorpius-mobile-menu-visible')) {
				$('body').removeClass('scorpius-mobile-menu-visible');
			}
		}
	};


	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#scorpius-mobile-menu, #scorpius-mobile-menu-btn");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      $('body').removeClass('scorpius-mobile-menu-visible');
	    }
		});
	};


	// Mobile Button Click
	var mobileBtnClick = function() {
		// $('#scorpius-mobile-menu-btn').on('click', function(e){
		$(document).on('click', '#scorpius-mobile-menu-btn', function(e){
			e.preventDefault();
			if ( $('body').hasClass('scorpius-mobile-menu-visible') ) {
				$('body').removeClass('scorpius-mobile-menu-visible');
			} else {
				$('body').addClass('scorpius-mobile-menu-visible');
			}

		});
	};


	// Main Menu Superfish
	var mainMenu = function() {

		$('#scorpius-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Superfish Sub Menu Click ( Mobiles/Tablets )
	var mobileClickSubMenus = function() {

		$('body').on('click', '.scorpius-sub-ddown', function(event) {
			event.preventDefault();
			var $this = $(this),
				li = $this.closest('li');
			li.find('> .scorpius-sub-menu').slideToggle(200);
		});

	};

	// Window Resize
	var windowResize = function() {
		$(window).resize(function(){
			mobileMenu();
		});

	};

	// Window Scroll
	var windowScroll = function() {
		$(window).scroll(function() {

			var scrollPos = $(this).scrollTop();
			if ( $('body').hasClass('scorpius-mobile-menu-visible') ) {
				$('body').removeClass('scorpius-mobile-menu-visible');
			}

			if ( $(window).scrollTop() > 70 ) {
				$('#scorpius-header-section').addClass('scorpius-scrolled');
			} else {
				$('#scorpius-header-section').removeClass('scorpius-scrolled');
			}


			// Parallax
			$('.scorpius-hero-intro').css({
	      'opacity' : 1-(scrollPos/300)
	    });

		});
	};

	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if ( isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	// Easy Repsonsive Tabs
	var responsiveTabs = function(){

		$('#scorpius-tab-feature').easyResponsiveTabs({
      type: 'default',
      width: 'auto',
      fit: true,
      inactive_bg: '',
      active_border_color: '',
      active_content_border_color: '',
      closed: 'accordion',
      tabidentify: 'hor_1'

    });
    $('#scorpius-tab-feature-center').easyResponsiveTabs({
      type: 'default',
      width: 'auto',
      fit: true,
      inactive_bg: '',
      active_border_color: '',
      active_content_border_color: '',
      closed: 'accordion',
      tabidentify: 'hor_1'

    });
    $('#scorpius-tab-feature-vertical').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true,
      inactive_bg: '',
      active_border_color: '',
      active_content_border_color: '',
      closed: 'accordion',
      tabidentify: 'hor_1'
    });
	};

	// // Add slideDown animation to Bootstrap dropdown when expanding.
  // $('.dropdown'), function() {
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  // });
	//
  // // Add slideUp animation to Bootstrap dropdown when collapsing.
  // $('.dropdown'), function() {
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  // });

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {

		var owl2 = $('.owl-carousel-2');
		owl2.owlCarousel({
				items: 1,
		    loop: true,
		    margin: 0,
		    lazyLoad: true,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
		    responsive: {
		        0: {
		          items: 1,
		          nav: true
		        },
		        600: {
		          items: 1,
		          nav: true,
		        },
		        1000: {
		          items: 1,
		          nav: true,
		        }
	    	}
		});
	};


	// Google map API
  $(function() {

      //set your google maps parameters
      var latitude = 46.205567,
          longitude = 21.274780,
          map_zoom = 17;

      //google map custom marker icon - .png fallback for IE11
      var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
      var marker_url = (is_internetExplorer11) ? '../images/cd-icon-location.png' : '../images/cd-icon-location.svg';

      //define the basic color of your map, plus a value for saturation and brightness
      var main_color = '#223a5e',
          saturation_value = 0,
          brightness_value = 20;

      //we define here the style of the map
      var style = [{
              //set saturation for the labels on the map
              elementType: "labels",
              stylers: [{
                  saturation: saturation_value
              }]
          }, { //poi stands for point of interest - don't show these lables on the map
              featureType: "poi",
              elementType: "labels",
              stylers: [{
                  visibility: "on"
              }]
          }, {
              //don't show highways lables on the map
              featureType: 'road.highway',
              elementType: 'labels',
              stylers: [{
                  visibility: "on"
              }]
          }, {
              //don't show local road lables on the map
              featureType: "road.local",
              elementType: "labels.icon",
              stylers: [{
                  visibility: "on"
              }]
          }, {
              //don't show arterial road lables on the map
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{
                  visibility: "on"
              }]
          }, {
              //don't show road lables on the map
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{
                  visibility: "on"
              }]
          },
          //style different elements on the map
          {
              featureType: "transit",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "poi.government",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "poi.sport_complex",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "poi.attraction",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "poi.business",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "transit",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "transit.station",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "landscape",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]

          }, {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }, {
              featureType: "water",
              elementType: "geometry",
              stylers: [{
                  hue: main_color
              }, {
                  visibility: "on"
              }, {
                  lightness: brightness_value
              }, {
                  saturation: saturation_value
              }]
          }
      ];

      //set google map options
      var map_options = {
              center: new google.maps.LatLng(latitude, longitude),
              zoom: map_zoom,
              panControl: false,
              zoomControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              scrollwheel: false,
              styles: style,
          }
          //inizialize the map
      var map = new google.maps.Map(document.getElementById('google-container'), map_options);
      //add a custom marker to the map
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
          visible: true,
          icon: marker_url,
      });

      //add custom buttons for the zoom-in/zoom-out on the map
      function CustomZoomControl(controlDiv, map) {
          //grab the zoom elements from the DOM and insert them in the map
          var controlUIzoomIn = document.getElementById('cd-zoom-in'),
              controlUIzoomOut = document.getElementById('cd-zoom-out');
          controlDiv.appendChild(controlUIzoomIn);
          controlDiv.appendChild(controlUIzoomOut);

          // Setup the click event listeners and zoom-in or out according to the clicked element
          google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
              map.setZoom(map.getZoom() + 1)
          });
          google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
              map.setZoom(map.getZoom() - 1)
          });
      }

      var zoomControlDiv = document.createElement('div');
      var zoomControl = new CustomZoomControl(zoomControlDiv, map);

      //insert the zoom div on the top left of the map
      map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

  });



	// Slick Slider ini
  $('.scorpius-clients-slider').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
  });




	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	};

	$(function(){

		mobileFastClick();
		responsiveTabs();
		mobileMenu();
		mainMenu();
		magnifPopup();
		mobileBtnClick();
		mobileClickSubMenus();
		mobileMenuOutsideClick();
		owlCrouselFeatureSlide();
		windowResize();
		windowScroll();


	});


}());
