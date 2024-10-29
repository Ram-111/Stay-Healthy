
// default slider

const defaultSlider = new Swiper('.default-slider', {
	speed: 400,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,

	navigation: {
		enabled: true,
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",	
	},

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		800: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 2,
			pagination: {
				enabled: false,
			},
		},

		1300: {
			slidesPerView: 3,
			pagination: {
				enabled: false,
			},
		},
	},
});


//burger//
const mobileContainer = document.querySelector(".mobile-container");
const burger = document.querySelector(".hamburger");
const body = document.querySelector("body");

function addClass() {
	mobileContainer.classList.toggle("show");
	burger.classList.toggle("is-active");
	body.classList.toggle("overflow-hidden");
}

burger.addEventListener("click", addClass);




// Swiper advantages
const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length;
console.log(advantagesSlideLength);

const swiperAdvantages = new Swiper('#advantages', {
  	speed: 400,
	spaceBetween: 12,
	loop: true,
	simulateTouch: true,
	slidesPerView: 1,

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		1025: {
			spaceBetween: 0,
			loop: false,
			slidesPerView: 4,
			slidesPerGroup: advantagesSlideLength,
			simulateTouch: false,

			pagination: {
				enabled: false,
			}
		}
	}
});
//pack//
document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.pack-rates', {
        speed: 400,
        spaceBetween: 30,
        loop: true,
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination-pack-rates',
            enabled: true,
            clickable: true,
        },
        
        navigation: {
            nextEl: '.swiper-button-next-pack',
            prevEl: '.swiper-button-prev-pack',
        },

        breakpoints: {
            800: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
                pagination: {
                    enabled: false,
                },
            },
            1300: {
                slidesPerView: 3,
                pagination: {
                    enabled: false,
                },
            },
        },
    });
});

