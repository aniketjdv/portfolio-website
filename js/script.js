// ========================================
// Mobile Navigation
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu when a link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});


// ========================================
// Dark Mode
// ========================================

const themeToggle = document.getElementById("themeToggle");


// Check previously selected theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
        '<span class="material-symbols-outlined">light_mode</span>';

}


// Toggle theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkMode =
        document.body.classList.contains("dark-mode");


    if (darkMode) {

        themeToggle.innerHTML =
            '<span class="material-symbols-outlined">light_mode</span>';

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.innerHTML =
            '<span class="material-symbols-outlined">dark_mode</span>';

        localStorage.setItem("theme", "light");

    }

});
