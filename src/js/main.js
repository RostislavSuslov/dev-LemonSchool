import '../css/style.css'

window.addEventListener('load', () => {
    const burgerBtn = document.querySelector('#burger');
    const mobileContainer = document.querySelector('#mobile-container');
    const body = document.querySelector('body')

    burgerBtn.addEventListener('click', () => {
        mobileContainer.classList.toggle('hidden')
        burgerBtn.classList.toggle('after:bg-purple')
        burgerBtn.classList.toggle('before:bg-purple')
        body.classList.toggle('overflow-hidden')
    })


    const installTabs = () => {
        const tabsButtons = document.querySelectorAll('[data-tab-content]')
        const tabContent = document.querySelectorAll('.tab-content')

        const removeActiveClassForNav = () => {
            tabsButtons.forEach(item => item.classList.remove('bg-purple'))
        }

        const hiddenContentTabs = () => {
            tabContent.forEach(item => item.classList.add('hidden'))
        }

        tabsButtons.forEach((item, index, array) => {
            const tabsButton = item.getAttribute('data-tab-content');

            item.addEventListener('click', () => {
                const showContent = document.getElementById(tabsButton)

                removeActiveClassForNav()
                item.classList.add('bg-purple')

                hiddenContentTabs()
                showContent.classList.remove('hidden')
            })
        })
    }




    // const partnersSwiper = new Swiper(".swiper", {
    //     slidesPerView: 4,
    //     speed: 3000,
    //     loop: true,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false,
    //     },
    // });

    // const initSwiper = () => {
    //     if (window.innerWidth >= 992) {
    //         console.log(window.innerWidth);

    //         new Swiper(".swiper", {
    //             slidesPerView: 4,
    //             speed: 3000,
    //             loop: true,
    //             autoplay: {
    //                 delay: 0,
    //                 disableOnInteraction: false,
    //             },
    //         });
    //     } else if (window.innerWidth <= 991) {
    //         console.log(window.innerWidth + "<= 991");

    //         partnersSwiper.destroy(true, true);
    //         partnersSwiper = null;
    //     }
    // }

    // window.addEventListener("load", initSwiper);
    // window.addEventListener("resize", initSwiper);

    function initPartners() {
        const breakpoint = window.matchMedia("(max-width:991px)");
        console.log(breakpoint);

        let partnersSwiper;

        const breakpointChecker = function () {
            if (breakpoint.matches === true) {
                if (partnersSwiper !== undefined) partnersSwiper.destroy(true, true);
                return;
            } else if (breakpoint.matches === false) {
                return enableSwiper();
            }
        };

        const enableSwiper = function () {
            partnersSwiper = new Swiper(".swiper", {
                    slidesPerView: 4,
                    speed: 3000,
                    loop: true,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
            });
        };
        breakpoint.addListener(breakpointChecker);
        breakpointChecker();
    }


    initPartners()
    document.querySelectorAll('.tabs').length ? installTabs() : null;
})



