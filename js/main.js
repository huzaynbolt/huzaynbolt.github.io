/*! mobile-slider - v0.1.2 - 2016-03-17
 * Copyright (c) 2016 Angel Vladov; Licensed MIT */
! function (a) {
    "use strict";

    function b(a, b) {
        var c = a.attr("data-item-width") || a.attr("item-width"),
            d = a.attr("data-slider-when") || a.attr("slider-when"),
            e = a.attr("data-start-at") || a.attr("start-at");
        c && (b.itemWidth = c), d && (b.sliderWhen = d), e && (b.startAt = e)
    }

    function c(a) {
        if ("string" == typeof a.itemWidth) {
            var b = a.itemWidth.charAt(a.itemWidth.length - 1);
            isNaN(parseInt(b)) || (a.itemWidth += "px")
        }
    }

    function d(a) {
        return a.outerWidth(!0)
    }
    
    a.fn.mobileSlider = function (e) {
        var f = a.extend({}, a.fn.mobileSlider.defaults, e);
        return this.each(function () {
            function e() {
                var b = '<div class="slider-dots">';
                o.each(function (c) {
                    var d = a(this);
                    d.data("slide-id", c), b += '<div class="slider-dot" data-node="' + c + '"></div>'
                }), b += "</ul>", p.html('<a href="" class="slider-prev"></a><a href="" class="slider-next"></a>' + b), p.on("click", ".slider-dot", function () {
                    var b = a(this).attr("data-node");
                    h(o[b])
                })
            }

            function g() {
                for (var b = n.width() / 2, c = null, d = 0, e = o.length; e > d; d++) {
                    var f = a(o[d]);
                    if (!(f.position().left <= b)) break;
                    c = f
                }
                if (!q || q[0] !== c[0]) {
                    q = c;
                    var g = q.data("slide-id"),
                        h = '[data-node="' + g + '"]';
                    o.removeClass("active"), q.addClass("active"), p.find(".slider-dot").removeClass("active").filter(h).addClass("active")
                }
            }

            function h(b, c) {
                b = a(b);
                var e = d(n),
                    f = d(b),
                    h = b.position().left,
                    i = n.scrollLeft(),
                    j = (e - f) / 2,
                    k = {
                        duration: "400ms"
                    };
                i += h - j, c !== !1 ? n.animate({
                    scrollLeft: i
                }, k) : n.scrollLeft(i), g()
            }

            function i() {
                p.on("click", ".slider-prev", function (a) {
                    a.preventDefault();
                    var b = q.data("slide-id"),
                        c = b - 1;
                    return 0 > c && (c = o.length - 1), h(o[c]), !1
                }), p.on("click", ".slider-next", function (a) {
                    a.preventDefault();
                    var b = q.data("slide-id"),
                        c = (b + 1) % o.length;
                    return h(o[c]), !1
                })
            }

            function j(a) {
                var b = o.length,
                    c = 0;
                if ("string" == typeof a) switch (a) {
                case "middle":
                    c = Math.ceil((o.length - 1) / 2);
                    break;
                case "first":
                    c = 0;
                    break;
                case "last":
                    c = o.length - 1;
                    break;
                default:
                    c = parseInt(f.startAt)
                } else "number" == typeof a ? c = a : jQuery.isFunction(a) && (c = j(a(f, b)));
                for (isNaN(c) ? c = 0 : c >= b && (c = b - 1); 0 > c;) c = b - c;
                return c
            }

            function k() {
                var b = a(f.container).width(),
                    c = m.hasClass("mobile-slider-active");
                if (b <= f.sliderWhen) {
                    if (!c) {
                        m.addClass("mobile-slider-active"), l(), s = (n.width() - o.first().width()) / 2, o.first().css("margin-left", s + "px"), o.last().css("margin-right", s + "px");
                        var d = o[j(f.startAt)];
                        h(d, !1)
                    }
                } else c && r && (o.first().css("margin-left", ""), o.last().css("margin-right", ""), m.removeClass("mobile-slider-active"))
            }

            function l() {
                r || (r = !0, n = m.find("ul"), o = n.find("li"), p = a('<div class="slider-nav"></div>').appendTo(m), n.addClass("slider-content"), o.length > 0 && (f.itemWidth && o.width(f.itemWidth), e(), n.on("scroll", g), g(), i()))
            }
            var m = a(this),
                n = null,
                o = null,
                p = null,
                q = null,
                r = !1,
                s = 0;
            m.hasClass("mobile-slider") || m.addClass("mobile-slider"), b(m, f), c(f), a(window).on("resize orientationchange", k), k()
        })
    }, a.fn.mobileSlider.defaults = {
        itemWidth: null,
        startAt: "middle",
        sliderWhen: 1024,
        container: window
    }, a(document).ready(function () {
        a(".mobile-slider").mobileSlider()
    })
    
    // End of mobile Slider 
    
    // Accordion Control Navigation
    
    var trigger = $(".control_trigger>.trigger"),
        target_element = $(".item_control");
    
    trigger.on('click', function() {
       if(target_element.hasClass("is_visible")) {
           target_element.removeClass("is_visible");
       } else {
           target_element.addClass("is_visible");
       }
    });
    
    // End of Accordion contro Navigation
    
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      scroll_top_duration = 1500,
      $back_to_top = $('.to-top');
    
    //hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
      if( $(this).scrollTop() > offset_opacity ) { 
        $back_to_top.addClass('fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });
    
    $('[data-toggle="tooltip"]').tooltip({
    });
    
    // Smooth scroll down
	$('.down_link > a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, scroll_top_duration);
            return false;
          }
        }
    }); 
        
}(jQuery);

/*File upload Script 
Changes the name of the upload button to the name of the file selected for upload
*/

;( function( $, window, document, undefined )
{
    $( '.inputfile' ).each( function()
    {
        var $input   = $(this),
            $label   = $input.next( 'label' ),
            labelVal = $label.html();

        $input.on( 'change', function( e )
        {
            var fileName = '';

            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else if( e.target.value )
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                $label.find( 'span' ).html( fileName );
            else
                $label.html( labelVal );
        });

        // Firefox bug fix
        $input
        .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
        .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });

    /*Explicit Close for Dropdown*/
    $('.dropdown.implicit_close').on({
        "shown.bs.dropdown": function() { this.closable = false; },
        // "click": function() { this.closable = true; },
        "hide.bs.dropdown":  function() { return this.closable; }
    });

    var close_btn = $(".dropdown.implicit_close .abort");
    var mother_container = $(".dropdown.implicit_close");

    close_btn.on('click', function() {
      mother_container.removeClass("open");
    });

    var back_btn = $(".goBack"); 
        
    back_btn.on('click', function() {
        prompt = confirm("Are you sure you want to leave and abandone all your changes?");
        if(prompt==true){
            window.history.back();
            return true;
        } else{
            return false;   
        }
    });

    /*Custom Audio Player*/
    var cust_player = $(".cust_player"),
        main_control = $(".main_player");
            
        cust_player.on('click', function(event) {
            var curr_cust_player = $(event.target).parents('svg');
            var media_player = curr_cust_player.prev()[0];
            
            if(curr_cust_player.attr('class').includes('played')) {
                media_player.pause();
                curr_cust_player.attr("class", "cust_player");
            } else {
                media_player.play();
                curr_cust_player.attr("class", "cust_player played");
            }
        });
        
        main_control.on('ended', function(event){
            var button = $(event.target).next();
            button.attr("class", "cust_player");
        });

        /*Custom Selector*/

        var selector_input = $(".select_control"),
        target_container = $('.my_selector');
    
        selector_input.on('click', function() {
            
           if($(this).attr("checked"), true) {
               $(this).parents(".select_radio").find(".my_selector").removeClass('active');
               $(this).parents(".my_selector").addClass("active");
            } else {
                $(this).parents(".my_selector").removeClass('active');
            } 
        });
    
})( jQuery, window, document );

/*End of file upload script*/
