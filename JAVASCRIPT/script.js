class Wafiq5Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <div class="brand-name">
                    <span class="brand-logo gradient-text">&lt;/<span class="brand-text"><a href="../../index.html">Wafiq</a></span>&gt;</span>
                    <span class="menu-toggle button">&#9776;</span>
                </div>
            
                <ul class="navbar-ul">
                    <li class="navbar-li button" onclick="window.location.href='../../index.html'">Home</li>
                    <li class="navbar-li button" onclick="window.location.href='./skills.html'">Skills</li>
                    <li class="navbar-li button" onclick="window.location.href='./projects.html'">Projects</li>
                    <li class="navbar-li button" onclick="window.location.href='./contact.html'">Contact</li>
                </ul>
            
                <ul class="bubble-navbar-ul">
                    <li class="navbar-li button-2" onclick="window.location.href='../../index.html'"><i class="fas fa-home"></i></li>
                    <li class="navbar-li button-2" onclick="window.location.href='./skills.html'"><i class="fa-solid fa-palette"></i></li>
                    <li class="navbar-li button-2" onclick="window.location.href='./projects.html'"><i class="fa-solid fa-screwdriver-wrench"></i></li>
                    <li class="navbar-li button-2" onclick="window.location.href='./contact.html'"><i class="fa-solid fa-phone"></i></li>
                </ul>
            </div>
        `;
    }
}

class Wafiq5Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer-container">
                <div class="grid-left"></div>
                <footer class="footer">
                    <div class="footer-text-container">
                        <div class="footer-header-social-links">
                            <h2 class="section-header"><span class="gradient-text">Wafiq </span> <div class="blinking-cursor"></div> </h2>
                            <div class="footer-social-links">
                                <a href="https://www.youtube.com/channel/UCUS9Lsz5ZGfBsDPuaeDLj7w"><i class="fa-brands fa-youtube"></i></a>
                                <a href="https://github.com/Wafiq5"><i class="fa-brands fa-github"></i></a>
                                <a href="https://www.instagram.com/wafiq_810/"><i class="fa-brands fa-instagram"></i></a>
                                <a class="discord-link">
                                    <i class="fa-brands fa-discord" onclick="copyLink('.discord-username')"></i>
                                    <span class="discord-username">wafiq810</span>
                                </a>
                            </div>
                        </div>
                        <ul class="footer-ul">
                            <div class="footer-ul-header">Know More _</div>
                            <li class="footer-li button" onclick="window.location.href='../../index.html'">Home</li>
                            <li class="footer-li button" onclick="window.location.href='./skills.html'">Skills</li>
                            <li class="footer-li button" onclick="window.location.href='./projects.html'">Projects</li>
                            <li class="footer-li button" onclick="window.location.href='./contact.html'">Contact</li>
                        </ul>
                    </div>
                </footer>
                <div class="footer-lets-code-overlay"></div>
                <div class="footer-copyright-container">
                    <div class="copyright">© 2024 Wafiq All Rights Reserved</div>
                </div>
            </div>
        `;
    }
}

class Wafiq5CopiedConfirmation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="link-copied-confirmation">Copied!</div>`;
    }
}


customElements.define('wafiq5-navbar', Wafiq5Navbar);
customElements.define('wafiq5-footer', Wafiq5Footer);
customElements.define('wafiq5-copied-confirmation', Wafiq5CopiedConfirmation);


document.addEventListener('DOMContentLoaded', function () {
    // NAVBAR RESPONSIVE
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.navbar-ul').classList.toggle('active');
        this.classList.toggle('active');
    });

    // INTERSECTION OBSERVER
    function createIntersectionObserver(targetSelector, classToAdd, classToRemove) {
    const targetElement = document.querySelector(targetSelector);
    const navbar = document.querySelector(".navbar");

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navbar.classList.add(classToAdd);
                    navbar.classList.remove(classToRemove);
                } else {
                    navbar.classList.remove(classToAdd);
                    navbar.classList.add(classToRemove);
                }
            });
        });

        observer.observe(targetElement);
    }

// Usage
createIntersectionObserver(".welcome-section-container", "bubble-navbar", "navbar");


    // SECTION SCROLLER
    function scrollToSection(buttonId, targetSectionId) {
        const button = document.getElementById(buttonId);
        const targetSection = document.getElementById(targetSectionId);
        button.addEventListener("touchstart", function () {
            console.log("Button clicked");
            targetSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
        });

        button.addEventListener("click", function () {
            console.log("Button clicked");
            targetSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
        });
    }

    scrollToSection('welcome-section-know-more-button', 'coding-experience-section-container');

    // LINK COPIER
    window.copyLink = function (linkNameParam) {
        const linkNameElement = document.querySelector(linkNameParam);
        if (linkNameElement) {
            const linkName = linkNameElement.innerHTML;
            navigator.clipboard.writeText(linkName).then(() => {
                const linkCopiedConfirmation = document.querySelector('.link-copied-confirmation');
                if (linkCopiedConfirmation) {
                    linkCopiedConfirmation.style.opacity = '1';
                    setTimeout(() => {
                        linkCopiedConfirmation.style.opacity = '0';
                    }, 3000);
                }
            })
        }
    };
});