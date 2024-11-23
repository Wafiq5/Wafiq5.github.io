class Wafiq5Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="navbar">
    <div class="brand-name">
        <span class="brand-logo gradient-text">&lt;/<span class="brand-text"><a href="../index.html">Wafiq</a></span>&gt;</span>
        <span class="menu-toggle button">&#9776;</span>
    </div>

    <ul class="navbar-ul">
        <li class="navbar-li button"><a href="../index.html">Home</a></li>
        <li class="navbar-li button"><a href="../HTML/skills.html">Skills</a></li>
        <li class="navbar-li button"><a href="../HTML/projects.html">Projects</a></li>
        <li class="navbar-li button"><a href="../HTML/contact.html">Contact</a></li>
    </ul>

    <ul class="bubble-navbar-ul">
        <li class="navbar-li button-2"><a href="../index.html"><i class="fas fa-home"></i></a></li>
        <li class="navbar-li button-2"><a href="../HTML/skills.html"><i class="fa-solid fa-palette"></i></a></li>
        <li class="navbar-li button-2"><a href="../HTML/projects.html"><i class="fa-solid fa-screwdriver-wrench"></i></a></li>
        <li class="navbar-li button-2"><a href="../HTML/contact.html"><i class="fa-solid fa-phone"></i></a></li>
    </ul>
</div>`;
    }
}

class Wafiq5Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="footer-container">
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
                <li class="footer-li button"><a href="../index.html">Home</a></li>
                <li class="footer-li button"><a href="../HTML/skills.html">Skills</a></li>
                <li class="footer-li button"><a href="../HTML/projects.html">Projects</a></li>
                <li class="footer-li button"><a href="../HTML/contact.html">Contact</a></li>
            </ul>
        </div>
    </footer>
    <div class="footer-lets-code-overlay"></div>
    <div class="footer-copyright-container">
        <div class="copyright">© 2024 Wafiq All Rights Reserved</div>
    </div>
</div>`;
    }
}

customElements.define('wafiq5-navbar', Wafiq5Navbar);
customElements.define('wafiq5-footer', Wafiq5Footer);

document.addEventListener('DOMContentLoaded', function () {
    // NAVBAR RESPONSIVE
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.navbar-ul').classList.toggle('active');
        this.classList.toggle('active');
    });

    // INTERSECTION OBSERVER
    const navbar = document.querySelector(".navbar");
    const welcomeSection = document.querySelector(".welcome-section-container");

    if (navbar && welcomeSection) {
        const welcomeSectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navbar.classList.add("bubble-navbar");
                    navbar.classList.remove("navbar");
                } else {
                    navbar.classList.remove("bubble-navbar");
                    navbar.classList.add("navbar");
                }
            });
        });

        welcomeSectionObserver.observe(welcomeSection);
    }

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
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };
});