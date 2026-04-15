// ===== INTERSECTION OBSERVER (PERFEITO PRA SCROLL) =====
const sections = document.querySelectorAll(".zoom-section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    observer.observe(section);
});


// ===== PARALLAX SUAVE HERO =====
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    hero.style.transform = `translateY(${scroll * 0.15}px)`;
});