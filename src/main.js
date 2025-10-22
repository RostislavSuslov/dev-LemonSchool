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


    let partnersSwiper;

    partnersSwiper = new Swiper(".swiper", {
        slidesPerView: 5,
    });

    const initSwiper = () => {
        if (window.innerWidth >= 992 && !partnersSwiper) {
            new Swiper(".swiper", {
                slidesPerView: 5,
            });
        } else if (window.innerWidth < 991 && partnersSwiper) {
            partnersSwiper.destroy(true, true);
            partnersSwiper = null;
        }
    }

    window.addEventListener("load", initSwiper);
    window.addEventListener("resize", initSwiper);

    document.querySelectorAll('.tabs').length ? installTabs() : null;
})


