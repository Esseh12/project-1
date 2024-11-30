$(document).ready(function () {
      window.addEventListener("resize", updateLayout, false);

      function updateLayout() {
        if (window.innerWidth < 991) {
          $(".burger-wrapper").on("changedClass", function () {
            $(this).removeClass("active");
          });

          $(document).on("click", "#onetrust-consent-sdk", function () {
            $(".ma5menu__toggle .burger-wrapper").removeClass('active');
          });
        }
      }
      updateLayout();

    });

    $(document).ready(function () {

      /***** ma5menu config starts *****/

      ma5menu({
        menu: '.site-menu',
        activeClass: 'active',
        footer: '#ma5menu-tools',
        position: 'bottom',
        closeOnBodyClick: true
      });

      /***** ma5menu config ends *****/

      /***** ma5menu custom starts *****/

      $('.ma5menu__btn--enter').on('click',
        function () {
          $('.ma5menu__logo').css('display', 'none');
        });

      $('.ma5menu__btn--leave').on('click',
        function () {
          setTimeout(
            function () {
              var className = $(".ma5menu__container .lvl-0").attr("class");
              if (className.indexOf('ma5menu__panel--active') != -1) {
                $('.ma5menu__logo').css('display', 'block');
              }
            },
            100);
        });

      /********  Hide mobile menu on mobile starts   *********/

      $(document).ready(function () {

        var previousScroll = 0;

        $(window).scroll(function () {

          var currentScroll = $(this).scrollTop();

          // If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
          if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {

            // If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
            if (currentScroll > previousScroll) {
              window.setTimeout(hideNav, 300);
            } else {
              window.setTimeout(showNav, 300);
            }

            // Set the previous scroll value equal to the current scroll.
            previousScroll = currentScroll;
          }

        });

        function hideNav() {
          $(".nav-logo-buttons").removeClass("is-visible").addClass("is-hidden");
        }

        function showNav() {
          $(".nav-logo-buttons").removeClass("is-hidden").addClass("is-visible");
        }

      });

      /********  Hide mobile menu on mobile ends   *********/
      if ($(".btn-floating")[0]) {
        var fixFloatingBtnNew = $('.btn-floating').offset().top;

        $(window).scroll(function () {

          var currentScrollNew = $(window).scrollTop();

          if (currentScrollNew >= fixFloatingBtnNew + 39) {

            $('.main-product-btn-clone').addClass("visible");
            $('.main-product-btn-clone').removeClass("hidden");

          } else {

            $('.main-product-btn-clone').addClass("hidden");
            $('.main-product-btn-clone').removeClass("visible");
          }


        });
      }


      var fixmeTopNew = $('.desktop-menu').offset().top;

      $(window).scroll(function () {

        var currentScrollNew = $(window).scrollTop();

        if (currentScrollNew >= 10) {
          $('.desktop-menu').addClass('anim-header-home');
          $('.desktop-menu').removeClass('header-home-top');


        } else {
          $('.desktop-menu').removeClass('anim-header-home');
          $('.desktop-menu').addClass('header-home-top');
        }

      });


      $(window).scroll(function () {

        var currentScrollNew1 = $(window).scrollTop();


      });


      if ($(".main-banner")[0]) {
        $('.navigation').addClass("landing-banner");
      } else {
        $('.navigation').removeClass('landing-banner');
      }

      $(window).on('load',
        function () {
          //alert("test");
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        });


      $('.dropdown-menu').on("click.bs.dropdown",
        function (e) {
          e.stopPropagation();
        });

      $('.btn-close-dropdown-menu').on("click",
        function () {
          $('.navbar-nav .dropdown-menu').removeClass('show');
          $('.navbar-nav .dropdown-toggle').removeClass('show');
          $('#overlay').css('display', 'none');
        });

      $('.navbar-nav .has-megamenu .dropdown-toggle').on("click",
        function () {
          var overlay = jQuery('<div id="overlay"> </div>');
          overlay.appendTo(document.body);
          $('#overlay').css({ "position": "fixed", "top": "0", "left": "0", "width": "100%", "height": "100%", "background-color": "#000", "opacity": "0.9", "z-index": "1010" });

          if ($(".megamenu").hasClass("show")) {

            $('#overlay').css('display', 'block');

          } else {
            $('#overlay').css('display', 'none');
          }


        });

      /*
      if ($(".owl-carousel-top-banner")[0]) {
          $('.desktop-menu').addClass("header-home");
      } else {
          $('.desktop-menu').removeClass('header-home');
      };
      */

      if ($(".owl-carousel-top-banner")[0] || $(".detail-page-banner")[0] || $(".banner-small")[0]) {
        $('.main').removeClass('no-banner-spacing');
      } else {
        $('.main').addClass("no-banner-spacing");
      };


      $(document).on("click",
        function (event) {
          var $trigger = $(".dropdown");
          if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('#overlay').css('display', 'none');
          }
        });


    });

