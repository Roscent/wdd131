// Enhanced Mobile Menu
class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.nav = document.querySelector('nav');
        this.init();
    }

    init() {
        if (this.menuToggle && this.nav) {
            this.setupEventListeners();
            this.handleResize();
            window.addEventListener('resize', () => this.handleResize());
        }
    }

    setupEventListeners() {
        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });
    }

    toggleMenu() {
        this.nav.classList.toggle('active');
        this.menuToggle.textContent = this.nav.classList.contains('active') ? '✕ Close' : '☰ Menu';
    }

    closeMenu() {
        this.nav.classList.remove('active');
        this.menuToggle.textContent = '☰ Menu';
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.nav.classList.remove('active');
            this.menuToggle.textContent = '☰ Menu';
        }
    }
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});