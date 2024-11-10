document.addEventListener("DOMContentLoaded", function () {
    // Function to update layout on window resize
    function updateLayout() {
        if (window.innerWidth < 991) {
            document.querySelectorAll(".burger-wrapper").forEach(function (element) {
                element.addEventListener("changedClass", function () {
                    element.classList.remove("active");
                });
            });

            document.addEventListener("click", function (event) {
                if (event.target.id === "onetrust-consent-sdk") {
                    document.querySelectorAll(".ma5menu__toggle .burger-wrapper").forEach(function (burger) {
                        burger.classList.remove("active");
                    });
                }
            });
        }
    }

    window.addEventListener("resize", updateLayout);
    updateLayout();

    window.onload = function () {
        /***** ma5menu config *****/
        ma5menu({
            menu: '.site-menu',
            activeClass: 'active',
            footer: '#ma5menu-tools',
            position: 'bottom',
            closeOnBodyClick: true
        });

        /***** ma5menu customizations *****/
        document.querySelector('.ma5menu__btn--enter').addEventListener('click', function () {
            document.querySelector('.ma5menu__logo').style.display = 'none';
        });

        document.querySelector('.ma5menu__btn--leave').addEventListener('click', function () {
            setTimeout(function () {
                var className = document.querySelector(".ma5menu__container .lvl-0").getAttribute("class");
                if (className.includes('ma5menu__panel--active')) {
                    document.querySelector('.ma5menu__logo').style.display = 'block';
                }
            }, 100);
        });

        /***** Hide mobile menu on mobile *****/
        let previousScroll = 0;
        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;
            if (currentScroll > 0 && currentScroll < document.body.scrollHeight - window.innerHeight) {
                if (currentScroll > previousScroll) {
                    setTimeout(hideNav, 300);
                } else {
                    setTimeout(showNav, 300);
                }
                previousScroll = currentScroll;
            }
        });

        function hideNav() {
            document.querySelector("nav").style.display = "none";
        }

        function showNav() {
            document.querySelector("nav").style.display = "block";
        }

        if (document.querySelector(".btn-floating")) {
            let fixFloatingBtnNew = document.querySelector('.btn-floating').getBoundingClientRect().top + window.scrollY;
            window.addEventListener('scroll', function () {
                let currentScrollNew = window.scrollY;
                if (currentScrollNew >= fixFloatingBtnNew + 39) {
                    document.querySelector('.main-product-btn-clone').classList.add("visible");
                    document.querySelector('.main-product-btn-clone').classList.remove("hidden");
                } else {
                    document.querySelector('.main-product-btn-clone').classList.add("hidden");
                    document.querySelector('.main-product-btn-clone').classList.remove("visible");
                }
            });
        }

        let fixmeTopNew = document.querySelector('.desktop-menu').getBoundingClientRect().top + window.scrollY;
        window.addEventListener('scroll', function () {
            let currentScrollNew = window.scrollY;
            if (currentScrollNew >= 10) {
                document.querySelector('.desktop-menu').classList.add('anim-header-home');
                document.querySelector('.desktop-menu').classList.remove('header-home-top');
            } else {
                document.querySelector('.desktop-menu').classList.remove('anim-header-home');
                document.querySelector('.desktop-menu').classList.add('header-home-top');
            }
        });

        if (document.querySelector(".main-banner")) {
            document.querySelector('.navigation').classList.add("landing-banner");
        } else {
            document.querySelector('.navigation').classList.remove('landing-banner');
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
            menu.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });

        document.querySelector('.btn-close-dropdown-menu').addEventListener("click", function () {
            document.querySelector('.navbar-nav .dropdown-menu').classList.add('show');
            document.querySelector('.navbar-nav .dropdown-toggle').classList.remove('show');
            document.querySelector('#overlay').style.display = 'none';
        });

        document.querySelector('.navbar-nav .has-megamenu .dropdown-toggle').addEventListener("click", function () {
            let overlay = document.createElement("div");
            overlay.id = "overlay";
            document.body.appendChild(overlay);
            Object.assign(overlay.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                opacity: "0.9",
                zIndex: "1010"
            });

            if (document.querySelector(".megamenu").classList.contains("show")) {
                document.getElementById("overlay").style.display = "block";
            } else {
                document.getElementById("overlay").style.display = "none";
            }
        });

        if (
            document.querySelector(".owl-carousel-top-banner") ||
            document.querySelector(".detail-page-banner") ||
            document.querySelector(".banner-small")
        ) {
            document.querySelector(".main").classList.remove("no-banner-spacing");
        } else {
            document.querySelector(".main").classList.add("no-banner-spacing");
        }

        document.addEventListener("click", function (event) {
            let trigger = document.querySelector(".dropdown");
            if (trigger && trigger !== event.target && !trigger.contains(event.target)) {
                document.querySelector("#overlay").style.display = "none";
            }
        });
    };
});
