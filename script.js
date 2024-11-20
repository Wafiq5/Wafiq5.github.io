document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar-ul').classList.toggle('active');
    this.classList.toggle('active');
});

// INTERSECTION OBSERVER FOR NAVBAR
const navbar = document.querySelector(".navbar");
const welcomeSection = document.querySelector(".welcome-section-container");

const welcomeSectionOptions = { };

const welcomeSectionObserver = new IntersectionObserver(function(entries, welcomeSectionObserver) {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            navbar.classList.add("bubble-navbar");
            navbar.classList.remove("navbar");
        }else{
            navbar.classList.remove("bubble-navbar");
            navbar.classList.add("navbar");
        }
    })
}, welcomeSectionOptions);

welcomeSectionObserver.observe(welcomeSection);