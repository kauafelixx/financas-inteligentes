const revealElements = document.querySelectorAll('.reveal');
const leadForm = document.querySelector('.lead-form');
const leadStatus = document.querySelector('#lead-status');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
}

if (leadForm && leadStatus) {
    leadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        leadStatus.textContent = 'Pronto. Seu diagnóstico inicial foi solicitado.';
        leadForm.reset();
    });
}
