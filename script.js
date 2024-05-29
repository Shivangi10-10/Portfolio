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
});
