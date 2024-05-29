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

    // Initialize Swiper Slider
    const slider = new Swiper('.slider', {
        loop: true,
        speed: 500,
        centeredSlides: true,
        slidesPerView: 3,
        navigation: {
            prevEl: '.button-prev',
            nextEl: '.button-next'
        },
        on: {
            slideChangeTransitionStart: function () {
                setBeforePrevAfterNext(this);
            }
        }
    });

    function setBeforePrevAfterNext($swiper) {
        let prev = $swiper.el.querySelector('.swiper-slide-prev');
        let next = $swiper.el.querySelector('.swiper-slide-next');
        let duplicate_prev = $swiper.el.querySelector('.swiper-slide-duplicate-prev');
        let duplicate_next = $swiper.el.querySelector('.swiper-slide-duplicate-next');
        let before_prev = prev.previousElementSibling;
        let after_next = next.nextElementSibling;

        $swiper.el.querySelectorAll('.swiper-slide-before-prev').forEach(element => {
            element.classList.remove('swiper-slide-before-prev');
        });

        $swiper.el.querySelectorAll('.swiper-slide-after-next').forEach(element => {
            element.classList.remove('swiper-slide-after-next');
        });

        before_prev.classList.add('swiper-slide-before-prev');
        after_next.classList.add('swiper-slide-after-next');

        if (duplicate_prev && duplicate_prev.previousElementSibling) {
            duplicate_prev.previousElementSibling.classList.add('swiper-slide-before-prev');
        }

        if (duplicate_next && duplicate_next.nextElementSibling) {
            duplicate_next.nextElementSibling.classList.add('swiper-slide-after-next');
        }
    }
});
