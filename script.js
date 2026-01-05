const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1,
    root: null,
    rootMargin: '0px 0px -1% 0px'
});

document.querySelectorAll('.grid__item').forEach(el => observer.observe(el));
