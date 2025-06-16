// Artist Application System
class ArtistApplication {
    constructor() {
        this.applications = JSON.parse(localStorage.getItem('artistApplications')) || [];
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const applicationForm = document.getElementById('artistApplication');
        if (applicationForm) {
            applicationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitApplication();
            });
        }

        // Terms modal trigger
        document.querySelectorAll('[data-modal="termsModal"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showTermsModal();
            });
        });
    }

    submitApplication() {
        const form = document.getElementById('artistApplication');
        const formData = new FormData(form);

        // Basic validation
        if (!formData.get('agreeTerms')) {
            alert('You must agree to the terms and conditions');
            return;
        }

        // Create application object
        const application = {
            id: Date.now().toString(),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            portfolio: formData.get('portfolio'),
            artType: formData.get('artType'),
            bio: formData.get('bio'),
            status: 'pending',
            submittedAt: new Date().toISOString()
        };

        // Handle file uploads (in a real app, this would upload to a server)
        const files = formData.getAll('artworkSamples');
        if (files.length > 0) {
            application.samples = [];
            files.forEach(file => {
                if (file.size > 0) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        application.samples.push({
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            data: e.target.result // Base64 encoded
                        });
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Save application
        this.applications.push(application);
        localStorage.setItem('artistApplications', JSON.stringify(this.applications));

        // Show success message
        alert('Application submitted successfully! We will review your application and get back to you soon.');
        form.reset();

        // Redirect to thank you page
        setTimeout(() => {
            window.location.href = 'thankyou.html';
        }, 1000);
    }

    showTermsModal() {
        const modal = document.getElementById('termsModal');
        if (modal) {
            modal.style.display = 'block';

            // Close modal when clicking X or outside
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }
}

// Initialize artist application system
document.addEventListener('DOMContentLoaded', () => {
    new ArtistApplication();
});