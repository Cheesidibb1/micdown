const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); // Use querySelectorAll
hiddenElements.forEach((el) => observer.observe(el)); // Iterate over the NodeList
