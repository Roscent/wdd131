class ContactForm {
    constructor() {
        this.messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupFAQToggle();
    }

    setupEventListeners() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitContactForm();
            });
        }
    }

    setupFAQToggle() {
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
    }

    submitContactForm() {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);

        const message = {
            id: Date.now().toString(),
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            subscribed: formData.get('newsletter') === 'on',
            receivedAt: new Date().toISOString(),
            status: 'unread'
        };

        this.messages.push(message);
        localStorage.setItem('contactMessages', JSON.stringify(this.messages));

        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});