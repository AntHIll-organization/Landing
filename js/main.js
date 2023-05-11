function printedTitle(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('animate-title');
        }
    });
}

function appearanceImage(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('block-show');
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    let burgerBtn = document.querySelector('.header__menu')
    let menu = document.querySelector('nav')
    let titlesText = document.querySelectorAll('.title-block');
    let peopleBlocks = document.querySelectorAll('.people-block')
    let skillsBlocks = document.querySelectorAll('.skills-block')


    burgerBtn.addEventListener('click', (e) => {
        menu.classList.add('active')
        setTimeout(() => {
            menu.style.left = 0 + '%'
        }, 1)
    })

    document.addEventListener('click', (e) => {
        if (menu.classList.contains("active")) {
            menu.style.left = -110 + '%'
        }

    })

    for (let title of titlesText) {
        new IntersectionObserver(printedTitle, {threshold: [0.5]}).observe(title);
    }

    for (let peopleBlock of peopleBlocks) {
        new IntersectionObserver(appearanceImage, {threshold: [0.5]}).observe(peopleBlock);
    }

    for (let skillsBlock of skillsBlocks) {
        new IntersectionObserver(appearanceImage, {threshold: [0.5]}).observe(skillsBlock);
    }
})




