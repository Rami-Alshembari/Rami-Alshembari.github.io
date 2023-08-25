document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.getElementById(this.dataset.target);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
