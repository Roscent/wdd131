// User registration
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        userType: e.target.userType.value // 'guest' or 'artist'
    };

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect based on user type
            if (formData.userType === 'artist') {
                window.location.href = '/artist-dashboard';
            } else {
                window.location.href = '/gallery';
            }
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('Registration failed. Please try again.');
    }
});