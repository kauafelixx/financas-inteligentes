window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (scrollTop + windowHeight > elementTop) {
            element.style.opacity = 1;
        }
    });
});
