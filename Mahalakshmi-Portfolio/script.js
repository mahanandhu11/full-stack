const roles = [
    "Full-Stack Developer",
    "Data Analytics Enthusiast",
    "Automation Explorer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".home h2");

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.innerHTML =
            currentRole.substring(0, charIndex + 1) +
            ' <span>|</span> Data Analytics Enthusiast';

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1200);
            return;
        }

    } else {

        charIndex--;

        roleElement.innerHTML =
            currentRole.substring(0, charIndex) +
            ' <span>|</span> Data Analytics Enthusiast';

        if (charIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeRole, deleting ? 60 : 100);
}

typeRole();