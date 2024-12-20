/*
*   MA5 jquery mobile menu
*   v4.0.0
*   GitHub: https://github.com/ma-5/ma5-mobile-menu
*/
function ma5menu(atributes) {
    // menuDesktop = string, target to desktop menu which will be used for build menu mobile. For example '.site-menu'
    var menuDesktop = '.site-menu';
    if (atributes.menu !== undefined) {
        menuDesktop = atributes.menu;
    }
    // activeClass = string, active class name without dot from active desktop menu <li> or <a>. For example 'active'
    var activeClass = 'active';
    if (atributes.activeClass !== undefined) {
        activeClass = atributes.activeClass;
    }
    // menuTools = string, target to menu tools container which will be used for build menu mobile footer. For example '#sma5menu-tools'
    var menuUnivers = '#ma5menu-univers';
    var menuFooter = '#ma5menu-tools';
    if (atributes.footer !== undefined) {
        menuFooter = atributes.footer;
    }
    if (atributes.univers !== undefined) {
        menuUnivers = atributes.univers;
    }
    if ($(menuDesktop).length > 0) {
        var ma5menuHtml = '\n' +
            '<!-- ma5-mobile-menu generated by js start -->\n' +
            '<nav id="js-ma5menu" class="ma5menu" itemscope itemtype="http://schema.org/SiteNavigationElement">\n' +
            '    <div class="ma5menu__header">\n' +
            '        <a class="ma5menu__home" href="/" tabindex="-1">\n' +
            '             <span class="ma5menu__logo"><img src="' + logoImage +'" alt="MCB logo"></span>\n' +
            '        </a>\n' +
            '    </div>\n' +
            '</nav>\n' +
            '<!-- ma5-mobile-menu generated by js end -->';
        $(menuDesktop).after(ma5menuHtml);
        $(menuDesktop).clone().attr('id', 'js-ma5menu-list').appendTo('#js-ma5menu');
        var menuMobile = $('#js-ma5menu-list');
        ma5menuBuilder_clearHTML(menuMobile);
        ma5menuBuilder_clearAttributes(menuMobile, activeClass);
        ma5menuBuilder_buildActive(menuMobile, activeClass);
        ma5menuBuilder_buildLevels($(menuMobile), 0, 'ma5-ul');
    }
    if ($('.ma5menu').length > 0) {
        var position = 'left';
        if (atributes.position === 'right') {
            position = atributes.position;
        }
        if (atributes.position === 'bottom') {
            position = atributes.position;
        }
        if (atributes.closeOnBodyClick === true) {
            $('html').on('click touch', function (e) {
                if (!$('.ma5menu__container').is(e.target) && $('.ma5menu__container').has(e.target).length === 0 && !$('.ma5menu__toggle').is(e.target) && $('.ma5menu__toggle').has(e.target).length === 0) {
                    $('html').removeClass('ma5menu--active');
                }
            });
        }
        $('html').addClass('ma5menu--' + position);
        $('body').append('<div class="ma5menu__container"><div class="ma5menu__container-content"><div class="ma5menu__head"></div></div></div>');


        $('.ma5menu__header').clone().appendTo('.ma5menu__head');
        $('.ma5menu').find('ul').clone().addClass('ma5menu__panel').appendTo('.ma5menu__container').find('ul').remove();
        $('.ma5menu__panel').each(function () {
            $(this).wrap('<div></div>');
            $(this).parent().addClass($(this).attr('class')).attr('data-ma5order', $(this).attr('data-ma5order'));
            $(this).removeAttr('class').removeAttr('data-ma5order');
        });
        if($(menuUnivers).length > 0) {
            $('.ma5menu__panel').prepend('<div class="ma5menu__univers js-append">' + $(menuUnivers).html() + '</div>');
        }
        if($(menuFooter).length > 0) {
            $('.ma5menu__panel').append('<div class="ma5menu__footer js-append">' + $(menuFooter).html() + '</div>');
        }
        $('.ma5menu__toggle').on('click touch', function () {
            $('html').addClass('ma5menu--ready').toggleClass('ma5menu--active').addClass('ma5menu--overflow');
            $('.ma5menu__panel').removeClass('ma5menu__panel--active-leave ma5menu__panel--parent-leave ma5menu__panel--active-enter ma5menu__panel--parent-enter');
            setTimeout(function () {
                ma5menuCheckScroll();
            }, 500);
        });
        $('.ma5menu__btn--enter').on('click touch', function () {
            $('.ma5menu__panel').removeClass('ma5menu__panel--active');
            $('.ma5menu__panel li').removeClass('ma5menu__li--current');
            var itemPath = $(this).parent().attr('data-ma5order').replace("li", "ul");
            var itemParent = $(this).parent().attr('data-ma5order').replace("li", "ul").split('-');
            var spliced = itemParent.splice(-1, 1);
            itemParent = itemParent.join("-");
            $('.ma5menu__panel').removeClass('ma5menu__panel--active-leave ma5menu__panel--parent-leave ma5menu__panel--active-enter ma5menu__panel--parent-enter');
            $('[data-ma5order="' + itemParent + '"]').addClass('ma5menu__panel--parent-enter');
            $('[data-ma5order="' + itemPath + '"]').addClass('ma5menu__panel--active-enter ma5menu__panel--active');
            setTimeout(function () {
                ma5menuCheckScroll();
            }, 500);
        });
        $('.ma5menu__leave').on('click touch', function () {
            $('.ma5menu__panel').removeClass('ma5menu__panel--active');
            console.log($(this).parent());
            var itemParent = $(this).parent().children('li').attr('data-ma5order').replace("li", "ul").split('-');
            var splicedParent = itemParent.splice(-1, 1);
            splicedParent = itemParent.splice(-1, 1);
            itemParent = itemParent.join("-");
            var itemPath = $(this).parent().children('li').attr('data-ma5order').replace("li", "ul").split('-');
            var spliced = itemPath.splice(-1, 1);
            itemPath = itemPath.join("-");
            $('.ma5menu__panel').removeClass('ma5menu__panel--active-leave ma5menu__panel--parent-leave ma5menu__panel--active-enter ma5menu__panel--parent-enter');
            $('[data-ma5order="' + itemParent + '"]').addClass('ma5menu__panel--parent-leave ma5menu__panel--active');
            $('[data-ma5order="' + itemPath + '"]').addClass('ma5menu__panel--active-leave');
            setTimeout(function () {
                ma5menuCheckScroll();
            }, 500);
        });
        var didResize = false;
        $(window).on('resize', function () {
            didResize = true;
        });
        setInterval(function () {
            if (didResize) {
                didResize = false;
                ma5menuCheckScroll();
            }
        }, 300);
    }
}

// scroll menu content alert
function ma5menuCheckScroll() {
    $('html').removeClass('ma5menu--overflow');
    $('.ma5menu__container').removeClass('ma5menu__container--scroll');
    if ($('.ma5menu__panel.ma5menu__panel--active').detectElementScrollbar()) {
        $('.ma5menu__container').addClass('ma5menu__container--scroll');
        $('.ma5menu__panel.ma5menu__panel--active').bind('scroll', function () {
            if (($(this).scrollTop() + $(this).innerHeight() + 1) >= $(this)[0].scrollHeight) {
                $('.ma5menu__container').removeClass('ma5menu__container--scroll');
            } else {
                $('.ma5menu__container').addClass('ma5menu__container--scroll');
            }
        });
    } else {
        $('.ma5menu__panel.ma5menu__panel--active').unbind("scroll");
    }
}

// builder functions
function ma5menuBuilder_clearAttributes(menu, activeClass) {
    var whitelist = ["src", "alt", "href"];
    var menuChildrens = $(menu).find('*');
    var menuRoot = $(menu);
    $(menuRoot).each(function () {
        var attributes = this.attributes;
        var i = attributes.length;
        while (i--) {
            var attr = attributes[i];
            if ($.inArray(attr.name, whitelist) === -1) {
                this.removeAttributeNode(attr);
            }
        }
    });
    $(menuChildrens).each(function () {
        var isException = $(this).is('.' + activeClass);
        var attributes = this.attributes;
        var i = attributes.length;
        while (i--) {
            var attr = attributes[i];
            if ($.inArray(attr.name, whitelist) === -1) {
                this.removeAttributeNode(attr);
            }
        }
        if (isException) {
            $(this).addClass(activeClass);
        }
    });
}

function ma5menuBuilder_clearHTML(menu) {
    var list = $(menu).find('ul');
    list.each(function () {
        $(this).unwrapUntil("li");
    });
    var link = $(menu).find('a');
    link.each(function () {
        $(this).unwrapUntil("li");
        link.find('> b, > strong, > span, > div, > i').replaceWith(function () {
            return $(this).contents();
        });
    });
    var images = $(menu).find('a > img');
    images.each(function () {
        if ($(this).parent().attr('title') !== undefined) {
            var title = $(this).parent().attr('title');
            $(this).parent().append(title).find('img').remove();
        } else {
            var alt = $(this).attr('alt');
            $(this).parent().append(alt).find('img').remove();
        }
    });
    $(menu).find('div:not([attr_all])').remove();
}

function ma5menuBuilder_buildActive(menu, activeClass) {
    var active = $(menu).find('.' + activeClass);
    if (active.length === 0) {
        $(menu).attr('data-ma5order', 'ma5-ul').addClass('ma5menu__panel--active');
    } else {
        $(menu).attr('data-ma5order', 'ma5-ul').removeClass('ma5menu__panel--active');
        var lvl = active.parentsUntil('#js-ma5menu').length;
        active.each(function () {
            var thisParent = $(this).parent();
            if (this.tagName === 'A') {
                $(this).parent().addClass('ma5menu__li--current').parent().addClass('ma5menu__panel--active');
                $(this).addClass('ma5menu__path');
                while (lvl--) {
                    thisParent = thisParent.parent().parent();
                    thisParent.find('> a').addClass('ma5menu__path');
                }
            }
            if (this.tagName === 'LI') {
                $(this).addClass('ma5menu__li--current').parent().addClass('ma5menu__panel--active');
                $(this).find('> a').addClass('ma5menu__path');
                while (lvl--) {
                    thisParent = thisParent.parent();
                    thisParent.find('> a').addClass('ma5menu__path');
                }
            }
        });
    }
    $('#js-ma5menu').find('.' + activeClass).removeClass(activeClass);
}

function ma5menuBuilder_buildLevels(parent, level, order) {
    parent.addClass('lvl-' + level);
    var orderLi = order.replace('ul', 'li');
    var children = parent.children('li');
    children.attr('data-ma5order', function (i) {
        return orderLi + '-' + (i + 1);
    });
    children.each(function () {
        var n = 0;
        var thisOrder = $(this).attr('data-ma5order').replace('li', 'ul');
        $(this).find('> ul').attr('data-ma5order', thisOrder);
        var sublist = $(this).children('ul');
        if (sublist.length > 0) {
            var thisText = $(this).find('> a').text();

            $(this).find('> ul > li:first-child').parent().prepend('<div class="ma5menu__leave"><span class="ma5menu__btn--leave"><i class="icon-twotone-arrow"></i></span>' + thisText + '</div>');
            
            $('<span class="ma5menu__btn--enter"><i class="icon-chevron-right"></i></span>').insertBefore($(this).find('> a'));
            var orderBuild = $(this).attr('data-ma5order');
            ma5menuBuilder_buildLevels(sublist, level + 1, orderBuild);
        }
    });
}


// ADDITIONAL FUNCTIONS

// https://github.com/jamesallardice/jquery.unwrapuntil
(function ($) {
    $.fn.unwrapUntil = function () {
        var arg = arguments[0],
            type = typeof arguments[0];
        if (type === "number") {
            $.each(this, function () {
                var $this = $(this);
                for (var i = 0; i < arg; i++) {
                    $this.unwrap();
                }
            });
        } else if (type === "string") {
            $.each(this, function () {
                var $this = $(this);
                if ($this.closest(arg).length > 0) {
                    while ($this.parent(arg).length === 0) {
                        $this.unwrap();
                    }
                }
            });
        } else if (type === "object") {
            $.each(this, function () {
                var $this = $(this);
                if ($this.closest(arg).length > 0) {
                    while ($this.parent()[0] !== arg[0]) {
                        $this.unwrap();
                    }
                }
            });
        }
        return this;
    };
})(jQuery);
//

// detect IE
var htmlRootForDetectBrowser = document.getElementsByTagName('html')[0];

function isIE() {
    return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null)));
}

if (isIE()) {
    htmlRootForDetectBrowser.className += " ie";
} else {
    htmlRootForDetectBrowser.className += " noie";
}
//

// detect Safari
function detectSafari() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            return false;
        } else {
            return true;
        }
    }

}

if (detectSafari()) {
    htmlRootForDetectBrowser.className += " safari";
}
//

// ESC close
$(document).ready(function () {
    $("body").keydown(function (e) {
        if (e.keyCode == 27) {
            $('html').removeClass('ma5menu--active');
        }
    });
});
//

// detect-element-scrollbar module
function detectElementScrollbar() {
    $('[data-detect-scrollbar]').each(function () {
        if ($(this).get(0).scrollHeight > $(this).get(0).clientHeight) {
            $(this).addClass('has-scrollbar').removeClass('hasnt-scrollbar');
        } else {
            $(this).addClass('hasnt-scrollbar').removeClass('has-scrollbar');
        }
    });
}

$.fn.detectElementScrollbar = function () {
    if ($(this).get(0).scrollHeight > $(this).get(0).clientHeight) {
        $(this).addClass('has-scrollbar').removeClass('hasnt-scrollbar');
        return true;
    } else {
        $(this).addClass('hasnt-scrollbar').removeClass('has-scrollbar');
        return false;
    }
};
$(document).ready(function () {
    detectElementScrollbar();
});
$(window).on('resize', function () {
    detectElementScrollbar();
});
$(window).on('load', function () {
    detectElementScrollbar();
});
//

// detect-body-scrollbar
$(window).on('load', function () {
    if ($('body').outerHeight() > $(window).height()) {
        $('html').addClass('has-body-scrollbar');
    } else {
        $('html').addClass('hasnt-body-scrollbar');
    }

    const burger = document.querySelector(".burger-wrapper");

    burger.addEventListener('click',function(e){
      this.classList.toggle('active');
    })
});
//