// Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

sections.forEach(section => {
    section.classList.add("fade");
});


// Typing Animation

const roles = [
    "Java Developer",
    "Computer Science Student",
    "Problem Solver",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

if (typingElement) {

    function type() {

        if (charIndex < roles[roleIndex].length) {

            typingElement.textContent += roles[roleIndex].charAt(charIndex);

            charIndex++;

            setTimeout(type, 100);

        } else {

            setTimeout(erase, 1500);

        }
    }

    function erase() {

        if (charIndex > 0) {

            typingElement.textContent =
                roles[roleIndex].substring(0, charIndex - 1);

            charIndex--;

            setTimeout(erase, 50);

        } else {

            roleIndex = (roleIndex + 1) % roles.length;

            setTimeout(type, 500);

        }
    }

    type();
}