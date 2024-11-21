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

//LINK COPIER

function copyLink(linkNameParam){
    const linkName = document.querySelector(linkNameParam).innerHTML;
    navigator.clipboard.writeText(linkName);

    const linkCopiedConfirmation = document.querySelector(".link-copied-confirmation");
    linkCopiedConfirmation.style.opacity = "1";

    setTimeout(() => {
        linkCopiedConfirmation.style.opacity = "0";
    }, 3000)
}