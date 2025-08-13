// Keep your existing code
document.getElementById("currentYear").textContent = new Date().getFullYear();

function openGmailCompose() {
    const email = "nathrajarshi25@gmail.com";
    window.open(`mailto:${email}`, "_blank");
}

function goToGithub() {
    const githublURL = `https://github.com/Max-31`;
    window.open(githublURL, "_blank");
}

function goToLinkedinCert() {
    const linkedinCertlURL = `https://www.linkedin.com/in/rajarshi-nath-781456255/details/certifications/`;
    window.open(linkedinCertlURL, "_blank");
}


// --- ADD THIS NEW CODE FOR HAMBURGER MENU ---
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.nav-mobile');
const body = document.body;

// Toggle menu on click
navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-mobile .subMenu');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
    });
});