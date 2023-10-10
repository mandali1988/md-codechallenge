$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


new Swiper('.slides-1', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
}); 


new Swiper('.slides-2', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


new Swiper('.slides-3', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}); 


(function ($) {
    function animateNumber() {
        $(".js-count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({ countNum: $this.text() }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 3000,
                    easing: "linear",
                    step: function () {
                        // Count up with commas
                        $this.text(Math.floor(this.countNum).toLocaleString("en"));
                    },
                    complete: function () {
                        // Add comma after done counting
                        $this.text(this.countNum.toLocaleString("en"));
                    }
                }
            );
        });
    }
    animateNumber();
})(jQuery);

// Function to scroll to the top of the page smoothly
function scrollToTop() {
    const scrollToTopButton = document.getElementById('goTopButton');
    if (document.documentElement.scrollTop > 0) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Show or hide the "Go to Top" button based on scroll position
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('goTopButton');
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}); 

function aos_init() {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', () => {
    aos_init();
});