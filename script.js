
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        // Highlight the active navigation link based on the section being viewed
        if(top >= offset && top < offset + height) { 
            navLinks.forEach (links => {       
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


ScrollReveal({
    //reset: true,
 distance: '80px', duration: 2000, delay: 200
});

ScrollReveal().reveal ('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal ('.home-img, .services-container, .portfolio-box, .contact form, .education-container. .technologies-container', { origin: 'bottom' });
ScrollReveal().reveal ('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal ('.home-content p, .about-content', { origin: 'right'});


// Contact Form Submission Script with EmailJS
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_idv68xn", "template_s08ns3k", this)
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again later.");
        });
});

const image3DAbout = document.getElementById('image3D-about');
const aboutContainer = document.querySelector('.about-img');

aboutContainer.addEventListener('mousemove', (e) => {
    const containerRect = aboutContainer.getBoundingClientRect();
    const xPos = e.clientX - containerRect.left;
    const yPos = e.clientY - containerRect.top;

    const xRotation = ((yPos - containerRect.height / 2) / containerRect.height) * 30;
    const yRotation = ((containerRect.width / 2 - xPos) / containerRect.width) * 30;

    image3DAbout.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

aboutContainer.addEventListener('mouseleave', () => {
    image3DAbout.style.transform = 'rotateX(0) rotateY(0)'; // Restablece la posición cuando el mouse sale del contenedor
});


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', '.Net Developer', 'AngularJS Developer'],
    typeSpeed: 100,
    backSpeed: 100,
 
    backDelay: 800,
    loop: true
});


