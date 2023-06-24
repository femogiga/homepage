

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('jiggle');
            return;
        }
        entry.target.classList.remove('jiggle');
    });
});


icons = document.querySelectorAll(".icon")
icons.forEach(icon => {
    observer.observe(icon)
})
