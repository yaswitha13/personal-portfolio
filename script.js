// =========================
// Typing Animation
// =========================

const roles = [
    "Java Developer",
    "Software Developer",
    "Problem Solver",
    "Computer Science Student",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = roles[roleIndex];

    if (!isDeleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// =========================
// Scroll Reveal Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// =========================
// Active Navbar
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =========================
// Counter Animation
// =========================

const counters=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseFloat(counter.innerText);

const suffix=counter.innerText.replace(/[0-9.]/g,'');

let count=0;

const speed=40;

const update=()=>{

count+=target/speed;

if(count<target){

counter.innerText=Math.ceil(count)+suffix;

requestAnimationFrame(update);

}else{

counter.innerText=target+suffix;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// =========================
// Floating Profile Image
// =========================

const image=document.querySelector(".image-box");

if(image){

let up=true;

setInterval(()=>{

image.style.transform=up
?"translateY(-10px)"
:"translateY(0px)";

up=!up;

},1500);

}
