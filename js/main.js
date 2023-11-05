const navLinks = document.querySelectorAll('.navLink')
const themeCheckbox = document.getElementsByClassName('.theme-checkbox')
const cards = document.querySelectorAll('.project-card')
const innerHeight = window.innerHeight

document.addEventListener('scroll', () => document.querySelector('.navbar').style.boxShadow = "var(--bs)",
)


Array.from(navLinks).forEach(a => {
    a.addEventListener('click', () => {
        document.querySelector('.checkbox').checked = false
    })
})

cards.forEach(card => {
    window.addEventListener('scroll', () => {
        const cardTop = card.getBoundingClientRect().top
        if (cardTop < innerHeight) { card.classList.add('card-active') }
        else { card.classList.remove('card-active') }
    })
    console.log('scrolling')
})

