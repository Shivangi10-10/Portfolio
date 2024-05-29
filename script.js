document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === "light-mode") {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    themeToggleBtn.addEventListener("click", function() {
        body.classList.toggle("light-mode");
        let theme = "dark-mode";
        if (body.classList.contains("light-mode")) {
            theme = "light-mode";
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
        localStorage.setItem("theme", theme);
    });
    // Particle cursor effect
    const aboutSection = document.getElementById('about');
    const particleContainer = document.getElementById('particle-container');
    aboutSection.addEventListener('mousemove', (e) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particleContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 1000); // Remove particle after 1 second
    });
});
// Particle CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    .particle {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #FFFDD0;
        background-color: #b06ab3;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: particle-fade 1s forwards;
    }
    @keyframes particle-fade {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;
document.head.appendChild(styleSheet);
