console.log("ScrollReveal loaded");

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks && menuBtnIcon) {
    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click" , (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class" , "ri-menu-line");
    });
} else {
    console.error("Navigation elements not found. Check HTML IDs for menu-btn or nav_links.");
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: true,
};

ScrollReveal().reveal(".container_left h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".content h4", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".content h2", {
    ...scrollRevealOption,
    delay: 600,
});
ScrollReveal().reveal(".content h3", {
    ...scrollRevealOption,
    delay: 800,
});
ScrollReveal().reveal(".content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".tent-1", {
    ...scrollRevealOption,
    delay: 1200,
});
ScrollReveal().reveal(".tent-2", {
    ...scrollRevealOption,
    delay: 1400,
});

ScrollReveal().reveal(".location", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
});

ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1000,
    interval: 100,
});

ScrollReveal().reveal(".services_box", {
    ...scrollRevealOption,
    delay: 200,
});