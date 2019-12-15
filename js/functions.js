$(function() {
    hamburgerToggle();
    scroller();
    galleryBelt();
    galleryChange();
    activeClient();
    closeMenu();
    isotope();
    workLoad();
    rightAppear();
    leftAppear();

    // -----------------
    //  NAVBAR POSITION
    // -----------------

    $(function() {
        $('#nav-wrapper').height($("#nav").height());

        $('#nav').affix({
            offset: { top: $('#nav').offset().top + 1 }
        });
    });
});


$(document).scroll(function() {

});


function scroller(duration) { //Scroll to div function
    $("a[href^='#']").on("click", function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

// -----------------
//      GLOBAL
// -----------------

function rightAppear() {
    $('.right-appear').addClass('hide_me').viewportChecker({
        classToAdd: 'animate appear fadeInright',
        offset: 120
    });
}

function leftAppear() {
    $('.left-appear').addClass('hide_me').viewportChecker({
        classToAdd: 'animate appear fadeInleft',
        offset: 120
    });
}


// -----------------
//      NAVBAR
// -----------------

function hamburgerToggle() {
    $('.navbar-toggle').click(function() {
        $('.hamb').toggleClass('active')
    })
}

function closeMenu() { //MENU COLLAPSE BACK ON CLICK

    $('.navbar-nav li a').not('.dropdown-toggle').on('click', function() {
        $('.navbar-ex1-collapse').removeClass('in');
        $('.hamb').removeClass('active')
    });
}

// -----------------
//      HEADER
// -----------------


// -----------------
//      ABOUT
// -----------------

// -----------------
//      SKILLS
// -----------------




// -----------------
//     WORKS
// -----------------

function galleryChange() {

    // $('.full-gallery').addClass('fadeOut');
    // $('.gallery').addClass('fadeIn');

    $('.gallery button').click(function() {
        $('.full-gallery').addClass('fadeIn');
        $('.gallery').removeClass('fadeIn').addClass('fadeOut');
    });

    $('.full-gallery button.second-btn').click(function() {
        $('.gallery').removeClass('fadeOut').addClass('fadeIn');
        $('.full-gallery').removeClass('fadeIn').addClass('fadeOut');
    });
}

function galleryBelt() {
    $('.thumb-container').on('click', function() {
        // $('.gallery-belt').css('left', '-100%');
        $('.gallery-show').removeClass('fadeOut').addClass('fadeIn');
        $('.main-gallery').removeClass('fadeIn').addClass('fadeOut');
    });
    $('.gallery-show button').on('click', function() {
        // $('.gallery-belt').css('left', '0%');
        $('.gallery-show').removeClass('fadeIn').addClass('fadeOut');
        $('.gallery').css('height', 'auto');
        $('.main-gallery').removeClass('fadeOut').addClass('fadeIn');
    });
}

function workLoad() {

    $.ajaxSetup({ cache: true });

    $(".thumb-container").click(function() {

        var $this = $(this),
            newFolder = $this.data("folder"),
            newHTML = '/works/' + newFolder + '.html',
            newTitle = $this.find("h4, h5").text(),
            spinner = '<div class="loader">Loading...</div>';

        $(".picture-container").html(spinner).load(newHTML)
        $(".gallery-show .works-title").text(newTitle);


    });
}

function isotope() {
    var $grid = $('.thumb-grid').isotope({
        // options...
        filter: '.latest',
        itemSelector: '.thumb-container',
        layoutMode: 'fitRows'
    });

    $('.category-btn').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.categories').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
}


// -----------------
//     EXPERIENCE
// -----------------


// function experienceBgParallax() {
//   var wScroll = $(this).scrollTop();
//
//   if($('#experience').offset().top - $(window).height() < wScroll) {
//     $('.experience-image').css({
//       'transform' : 'translate(0px, '+ wScroll /164 +'%)'
//     })
//   }
// }

// -----------------
//     CLIENTS
// -----------------

function activeClient() {
    $('.client-desc').eq(0).addClass('active-client');
    $('.enterprise-icon').eq(0).addClass('active-enterprise');

    $(".enterprise-icon").click(function() {
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);

        $(".client-desc").removeClass("active-client").eq(position).addClass("active-client");
        $siblings.removeClass("active-enterprise");
        $this.addClass("active-enterprise");
    });

    $(".prev-client, .next-client").click(function() {

        var $this = $(this),
            activeClient = $(".client-container").find(".active-client"),
            position = $(".client-container").children().index(activeClient),
            clientNum = $(".client-desc").length;



        if ($this.hasClass("next-client")) {

            if (position < clientNum - 1) {

                $(".active-client").removeClass("active-client").next().addClass("active-client");
                $(".active-enterprise").removeClass("active-enterprise").next().addClass("active-enterprise");

            } else {

                $(".client-desc").removeClass("active-client").first().addClass("active-client");
                $(".enterprise-icon").removeClass("active-enterprise").first().addClass("active-enterprise");
            }

        } else {

            if (position === 0) {
                $(".client-desc").removeClass("active-client").last().addClass("active-client");
                $(".enterprise-icon").removeClass("active-enterprise").last().addClass("active-enterprise");

            } else {

                $(".active-client").removeClass("active-client").prev().addClass("active-client");
                $(".active-enterprise").removeClass("active-enterprise").prev().addClass("active-enterprise");
            }

        }

    });
}


// -----------------
//     SOCIAL
// -----------------