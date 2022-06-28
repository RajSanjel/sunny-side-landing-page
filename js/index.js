const hamToggle = document.querySelector('.ham-menu');

hamToggle.addEventListener('click', () => {
    document.querySelector('.mobile-toggle').classList.toggle('active')
})