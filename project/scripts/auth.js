class AuthSystem {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateAuthUI();
    }

    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                this.login(email, password);
            });
        }

        const logoutButtons = document.querySelectorAll('.logout-btn');
        logoutButtons.forEach(button => {
            button.addEventListener('click', () => this.logout());
        });
    }

    register(userData) {
        const userExists = this.users.some(user => user.email === userData.email);
        if (userExists) {
            this.showNotification('User with this email already exists', 'error');
            return false;
        }

        const newUser = {
            id: Date.now().toString(),
            ...userData,
            createdAt: new Date().toISOString(),
            role: 'user'
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        this.showNotification('Registration successful!', 'success');
        this.updateAuthUI();
        return true;
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.showNotification('Login successful!', 'success');
            this.updateAuthUI();

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
            return true;
        } else {
            this.showNotification('Invalid email or password', 'error');
            return false;
        }
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.showNotification('Logged out successfully', 'success');
        this.updateAuthUI();

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    updateAuthUI() {
        const loginBtn = document.getElementById('login-btn');
        const userMenu = document.getElementById('user-menu');

        if (this.currentUser) {
            if (loginBtn) loginBtn.style.display = 'none';
            if (userMenu) {
                userMenu.style.display = 'block';
                document.getElementById('user-name').textContent = this.currentUser.name || this.currentUser.email;
            }
        } else {
            if (loginBtn) loginBtn.style.display = 'block';
            if (userMenu) userMenu.style.display = 'none';
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    isArtist() {
        return this.currentUser && this.currentUser.role === 'artist';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const auth = new AuthSystem();
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('register-name').value,
                email: document.getElementById('register-email').value,
                password: document.getElementById('register-password').value
            };
            if (auth.register(formData)) {
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
    }
});