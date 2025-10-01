window.addEventListener('load', () => {

    const initModalWindow = () => {
        const modalShowTrigers = document.querySelectorAll('[data-triger]')
        const modalCloseTriger = document.querySelectorAll('[data-close-modal]')

        modalShowTrigers.forEach(triger => {
            triger.addEventListener('click', () => {
                const trigerData = triger.getAttribute('data-triger')
                document.getElementById(trigerData).classList.add('show')
            })
        }
        )

        modalCloseTriger.forEach(button => {
            button.addEventListener('click', () => {
               // document.querySelector('.modal.show')
                button.closest('.modal').classList.remove('show')
                
                
            })
        })

        // triger.addEventListener('click', ()=> {
        //     modal.classList.add('show')
        // })

        // closeWindow.addEventListener('click', ()=> {
        //     modal.classList.remove('show')
        // })
    }

    initModalWindow()
})

/*
1. Зміні
2. Функції - які ми створюємо і викликаємо
3. обробник події та події
*/