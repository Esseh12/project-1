import ma5menu from '../public/ResourcePackages/MCBMU/assets/dist/js/ma5-menu7306';

    document.addEventListener('DOMContentLoaded', function () {

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
      document.querySelectorAll('.ma5menu__btn--enter').forEach(function (button) {
        button.addEventListener('click', function () {
          document.querySelector('.ma5menu__logo').style.display = 'none';
        });
      });

      document.querySelectorAll('.ma5menu__btn--leave').forEach(function (button) {
        button.addEventListener('click', function () {
          setTimeout(function () {
            const className = document.querySelector('.ma5menu__container .lvl-0').className;
            if (className.includes('ma5menu__panel--active')) {
              document.querySelector('.ma5menu__logo').style.display = 'block';
            }
          }, 100);
        });
      });

      /********  Hide mobile menu on mobile starts   *********/

      let previousScroll = 0;

      window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;

        if (currentScroll > 0 && currentScroll < document.documentElement.scrollHeight - window.innerHeight) {
          if (currentScroll > previousScroll) {
            setTimeout(hideNav, 300);
          } else {
            setTimeout(showNav, 300);
          }
          previousScroll = currentScroll;
        }
      });

      function hideNav() {
        document.querySelector('.nav-logo-buttons').classList.remove('is-visible');
        document.querySelector('.nav-logo-buttons').classList.add('is-hidden');
      }

      function showNav() {
        document.querySelector('.nav-logo-buttons').classList.remove('is-hidden');
        document.querySelector('.nav-logo-buttons').classList.add('is-visible');
      }

      /********  Hide mobile menu on mobile ends   *********/
      if (document.querySelector('.btn-floating')) {
        const fixFloatingBtnNew = document.querySelector('.btn-floating').offsetTop;

        window.addEventListener('scroll', function () {
          const currentScrollNew = window.scrollY;

          const clone = document.querySelector('.main-product-btn-clone');
          if (currentScrollNew >= fixFloatingBtnNew + 39) {
            clone.classList.add('visible');
            clone.classList.remove('hidden');
          } else {
            clone.classList.add('hidden');
            clone.classList.remove('visible');
          }
        });
      }

      const fixmeTopNew = document.querySelector('.desktop-menu').offsetTop;

      window.addEventListener('scroll', function () {
        const currentScrollNew = window.scrollY;

        const desktopMenu = document.querySelector('.desktop-menu');
        if (currentScrollNew >= 10) {
          desktopMenu.classList.add('anim-header-home');
          desktopMenu.classList.remove('header-home-top');
        } else {
          desktopMenu.classList.remove('anim-header-home');
          desktopMenu.classList.add('header-home-top');
        }
      });

      if (document.querySelector('.main-banner')) {
        document.querySelector('.navigation').classList.add('landing-banner');
      } else {
        document.querySelector('.navigation').classList.remove('landing-banner');
      }

      window.addEventListener('load', function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });

      document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      });

      document.querySelectorAll('.btn-close-dropdown-menu').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.navbar-nav .dropdown-menu').forEach(function (menu) {
            menu.classList.remove('show');
          });
          document.querySelectorAll('.navbar-nav .dropdown-toggle').forEach(function (toggle) {
            toggle.classList.remove('show');
          });
          document.getElementById('overlay').style.display = 'none';
        });
      });

      document.querySelectorAll('.navbar-nav .has-megamenu .dropdown-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
          const overlay = document.createElement('div');
          overlay.id = 'overlay';
          document.body.appendChild(overlay);
          overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background-color: #000; opacity: 0.9; z-index: 1010;
      `;

          if (document.querySelector('.megamenu').classList.contains('show')) {
            overlay.style.display = 'block';
          } else {
            overlay.style.display = 'none';
          }
        });
      });

      if (document.querySelector('.owl-carousel-top-banner') || document.querySelector('.detail-page-banner') || document.querySelector('.banner-small')) {
        document.querySelector('.main').classList.remove('no-banner-spacing');
      } else {
        document.querySelector('.main').classList.add('no-banner-spacing');
      }

      document.addEventListener('click', function (event) {
        const trigger = document.querySelector('.dropdown');
        if (!trigger.contains(event.target)) {
          const overlay = document.getElementById('overlay');
          if (overlay) {
            overlay.style.display = 'none';
          }
        }
      });
    });

