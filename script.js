function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.style.background = window.scrollY > 50 ? "#6c1414" : "#471010";
});
