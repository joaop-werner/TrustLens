// ===== ANIMAÇÃO DE ENTRADA (TODAS SEÇÕES) =====
const elements = document.querySelectorAll(".section, .final");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up", "show");
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// ===== MOVIMENTO GLOBAL DO FUNDO (IA VIVA) =====
const bg = document.querySelector("body::before");

window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    document.body.style.setProperty("--x", `${x}px`);
    document.body.style.setProperty("--y", `${y}px`);
});


// ===== PARALLAX LEVE NAS IMAGENS =====
window.addEventListener("scroll", () => {
    document.querySelectorAll(".image img").forEach(img => {
        const rect = img.getBoundingClientRect();
        const speed = rect.top * 0.05;

        img.style.transform = `translateY(${speed}px) scale(1.02)`;
    });
});

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    heroBg.style.transform = `translate(${x}px, ${y}px)`;
});